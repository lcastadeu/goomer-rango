import { DatabaseCommand } from '../../infraestructure/database/database.command';

export class AbstractRepository<T> {

  protected command: DatabaseCommand;
  protected tableName: string | undefined;

  constructor() {
    this.command = new DatabaseCommand();

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');
  }

  async find(id: number) {
    return await this.command.execSelectCommand(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
  }

  async findAll() {
    return await this.command.execSelectCommand(`SELECT * FROM ${this.tableName}`);
  }

  async save(object: T) {

  }

  async update(id: number, object: T) {
    
  }

  async delete(id: number) {
    return await this.command.execSelectCommand(`DELETE FROM ${this.tableName} WHERE id = $1`, [id]);
  }

}