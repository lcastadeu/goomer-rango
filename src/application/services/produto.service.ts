import { AbstractService } from './abstract.service';
import { ProdutoRepository } from '../../domain/repositories/produto.repository';
import { Produto } from '../../domain/entities/produto.entity';

export class ProdutoService extends AbstractService<Produto> {

  constructor(protected repository: ProdutoRepository) {
    super(repository);

  }
}