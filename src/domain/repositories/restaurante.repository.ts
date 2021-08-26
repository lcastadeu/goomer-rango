import { Restaurante } from "../entities/restaurante.entity";
import { AbstractRepository } from "./abstract.repository";

export class RestauranteRepository extends AbstractRepository<Restaurante> {

  constructor() {
    super();
    this.tableName = 'restaurante';
  }


}