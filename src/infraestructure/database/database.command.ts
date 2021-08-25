import database from "./database.connection";
import { Pool } from 'pg';

//Classe criada para ser a responsavel por realizar a transação com o banco de dados.
export class DatabaseCommand {

  protected connection: Pool;

  constructor() {
    this.connection = database;
  }

  //Metodo reponsável por realizar consultas!
  async execSelectCommand(command: string, parameters?: []) {
    return await this.connection.query(command, parameters)
      .then(data => {
        return data.rows;
      })
      .catch(error => {
        throw new Error(`Erro ao realizar consulta no banco de dados! ${error}`)
      })
      .finally(() => {
        database.end();
      });
  }
  
  //Metodo responsável por realizar operações de inserção!
  //Alguns recursos foram obtidos atravez da documentação: https://node-postgres.com/features/transactions
  async execInsertCommand(tableName: string, fields: string[], values: any[]) {

    if (fields.length !== values.length) {
      throw new Error(`Parametros de Inserção inválidos. Por favor, verificar.`);
    }

    let value: string = '';
    for (let index = 1; index <= fields.length; index++) {
      value += `\$${index}`;
      if (index < fields.length) {
        value += `,`;
      }
    }
    
    const client = await this.connection.connect()
    try {
      await client.query('BEGIN')
      const res = await client.query(`INSERT INTO ${tableName} (${fields.join(',')}) VALUES (${value}) RETURNING *`, values)
      await client.query('COMMIT')
      return res.rows[0];
    } catch (error) {
      await client.query('ROLLBACK')
      throw new Error(`Erro ao realizar operação de Inserção de dados. Desfazendo Tranzação! ${error}`)
    } finally {
      client.release()
    }
  }
}
