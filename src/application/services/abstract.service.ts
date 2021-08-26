import { DatabaseCommand } from '../../infraestructure/database/database.command';
export class AbstractService {

  protected command: DatabaseCommand;

  constructor() {
    this.command = new DatabaseCommand();
  }


}