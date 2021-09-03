import { AbstractRepository } from "./abstract.repository";
import { PromocaoProduto } from '../entities/promocao_produto.entity';

export class PromocaoProdutoRepository extends AbstractRepository<PromocaoProduto> {

  constructor() {
    super();
    this.tableName = 'promocao_produto';
  }


}