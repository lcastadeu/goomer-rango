import { AbstractService } from './abstract.service';
import { HorarioPromocaoProdutoRepository } from '../../domain/repositories/horario_promocao_produto.repository';
import { HorarioPromocaoProduto } from '../../domain/entities/horario_promocao_produto.entity';

export class HorarioPromocaoProdutoService extends AbstractService<HorarioPromocaoProduto> {

  constructor(protected repository: HorarioPromocaoProdutoRepository) {
    super(repository);
  }
  
}