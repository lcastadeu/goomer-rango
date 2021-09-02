import { AbstractService } from './abstract.service';
import { CategoriaProduto } from '../../domain/entities/categoria_produto.entity';
import { CategoriaProdutoRepository } from '../../domain/repositories/categoria_produto.repository';

export class CategoriaProdutoService extends AbstractService<CategoriaProduto> {

  constructor(protected repository: CategoriaProdutoRepository) {
    super(repository);

  }
}