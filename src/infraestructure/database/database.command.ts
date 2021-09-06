import database from "./database.connection";
import { Pool } from 'pg';


//Classe criada para ser a responsavel por realizar a transação com o banco de dados.
export class DatabaseCommand {

  protected connection;

  constructor() {
    this.connection = database();
  }

  //Metodo reponsável por realizar consultas!
  async execSelectCommand(command: string, parameters?: any[]) {
    console.log(command);
    return await this.connection.query(command, parameters)
      .then(data => {
        return data.rows;
      })
      .catch(error => {
        throw new Error(`Erro ao realizar consulta no banco de dados! ${error}`)
      });
  }

  //Metodo responsável por realizar operações de inserção!
  //Alguns recursos foram obtidos atravez da documentação: https://node-postgres.com/features/transactions
  async execInsertCommand(tableName: string, fields: string[], values: any[]) {

    if (fields.length !== values.length) 
      throw new Error(`Parametros de Inserção inválidos. Por favor, verificar.`);

    let data = '';
    let valueFlag = '';
    let valueData: any[] = [];
    for (let i = 0; i <= fields.length; i++) {
      if (fields[i]) {
        data += `${fields[i]}`;
        valueFlag += `\$${i + 1}`
        valueData.push(values[i]);
        if (i < fields.length){
          data += ',';
          valueFlag += ',';
        }
          
      }
    }

    if (data.charAt(data.length - 1) === ',') {
      data = data.substr(0, data.length - 1);
      valueFlag = valueFlag.substr(0, valueFlag.length - 1);
    }

    const client = await this.connection.connect()
    await client.query('BEGIN')
    return await client.query(`INSERT INTO ${tableName} (${data}) VALUES (${valueFlag}) RETURNING *`, [...valueData]).then(x => {
      client.query('COMMIT')
      return x.rows[0];
    }).catch(error => {
      client.query('ROLLBACK');
      throw new Error(`Erro ao realizar operação de inclusão de dados. Desfazendo Tranzação! ${error}`)
    }).finally(() => {
      client.release();
    })
  }

  //Metodo responsável por realizar operações de inserção!
  //Alguns recursos foram obtidos atravez da documentação: https://node-postgres.com/features/transactions
  async execUpdateCommand(tableName: string, id: number, fields: string[], values: any[]) {

    if (fields.length !== values.length) {
      throw new Error(`Parametros de Inserção inválidos. Por favor, verificar.`);
    }

    let data = '';
    let valueData: any[] = [];
    for (let i = 0; i <= fields.length; i++) {
      if (fields[i]) {
        data += `${fields[i]} = \$${i+1}`;
        valueData.push(values[i]);
        if (i < fields.length)
          data += ',';
      }
    }

    if (data.charAt(data.length - 1) === ',') {
      data = data.substr(0, data.length - 1);
    }

    const client = await this.connection.connect()
    await client.query('BEGIN')
    return await client.query(`UPDATE ${tableName} SET ${data} WHERE id = \$${data.split(',').length + 1} RETURNING *`, [...valueData, id]).then(x => {
      client.query('COMMIT')
      return x.rows[0];
    }).catch(error => {
      client.query('ROLLBACK');
      throw new Error(`Erro ao realizar operação de exclusão de dados. Desfazendo Tranzação! ${error}`)
    }).finally(() => {
      client.release();
    })
  }


  //Metodo responsável por realizar operações de inserção!
  //Alguns recursos foram obtidos atravez da documentação: https://node-postgres.com/features/transactions
  async execDeleteCommand(tableName: string, id: number) {

    if (!id) 
      throw new Error(`Código para exclusão não informado. Por favor, verificar.`);

    const object = await this.execSelectCommand(`SELECT 1 FROM ${tableName} WHERE id = $1 LIMIT 1`, [id]);
    if (!object)
      throw new Error(`Registro não encontrador. Por favor, certifique-se de que esteja correto!`);

    const client = await this.connection.connect()
    await client.query('BEGIN')
    return await client.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]).then(x => {
      client.query('COMMIT')
      return (x.rowCount > 0);
    }).catch(error => {
      client.query('ROLLBACK');
      throw new Error(`Erro ao realizar operação de exclusão de dados. Desfazendo Tranzação! ${error}`)
    }).finally(() => {
      client.release();
    })
  }
}
