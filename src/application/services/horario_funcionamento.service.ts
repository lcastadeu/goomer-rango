import { AbstractService } from './abstract.service';
import { HorarioFuncionamentoRepository } from '../../domain/repositories/horario_funcionamento.repository';
import { HorarioFuncionamento } from '../../domain/entities/horario_funcionamento.entity';

export class HorarioFuncionamentoService extends AbstractService<HorarioFuncionamento> {

  constructor(protected repository: HorarioFuncionamentoRepository) {
    super(repository);

  }
}