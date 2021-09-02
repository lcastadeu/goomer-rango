import { AbstractRepository } from "./abstract.repository";
import { CategoriaProduto } from '../entities/categoria_produto.entity';

export class CategoriaProdutoRepository extends AbstractRepository<CategoriaProduto> {

  constructor() {
    super();
    this.tableName = 'categoria_produto';
  }


}