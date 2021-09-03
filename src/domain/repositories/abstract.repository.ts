import { DatabaseCommand } from '../../infraestructure/database/database.command';

export abstract class AbstractRepository<T> {

  protected command: DatabaseCommand;
  protected tableName: string | undefined;

  constructor() {
    this.command = new DatabaseCommand();
  }

  setTableName(name: string) {
    this.tableName = this.tableName;
  }

  async find(id: number) {

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');

    return await this.command.execSelectCommand(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
  }

  async findAll() {

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');

    return await this.command.execSelectCommand(`SELECT * FROM ${this.tableName}`);
  }

  async save(object: T) {

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');

    return await this.command.execInsertCommand(this.tableName, Object.getOwnPropertyNames(object), Object.values(object))
  }

  async update(id: number, object: T) {

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');
      

    return await this.command.execUpdateCommand(this.tableName, id, Object.getOwnPropertyNames(object), Object.values(object));
  }

  async delete(id: number) {

    if (!this.tableName)
      throw new Error('Nome da tabela não informada! Por favor, especificar');

    return await this.command.execDeleteCommand(this.tableName, id);
  }

}