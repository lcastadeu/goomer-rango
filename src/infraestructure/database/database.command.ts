import database from "./database.connection";

export class DatabaseCommand {

  async execSelectCommand(command: string, parameters?: []) {
    return await database.query(command, parameters)
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

}
