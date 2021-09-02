import { Produto } from "../entities/produto.entity";
import { AbstractRepository } from "./abstract.repository";

export class ProdutoRepository extends AbstractRepository<Produto> {

  constructor() {
    super();
    this.tableName = 'produto';
  }


}