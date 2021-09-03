import { AbstractService } from './abstract.service';
import { PromocaoProduto } from '../../domain/entities/promocao_produto.entity';
import { PromocaoProdutoRepository } from '../../domain/repositories/promocao_produto.repository';

export class PromocaoProdutoService extends AbstractService<PromocaoProduto> {

  constructor(protected repository: PromocaoProdutoRepository) {
    super(repository);

  }
}