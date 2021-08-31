import { AbstractRepository } from "./abstract.repository";
import { Arquivo } from '../entities/arquivo.entity';

export class ArquivoRepository extends AbstractRepository<Arquivo> {

  constructor() {
    super();
    this.tableName = 'arquivo';
  }


}