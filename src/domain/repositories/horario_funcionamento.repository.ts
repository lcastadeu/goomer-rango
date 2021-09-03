import { AbstractRepository } from "./abstract.repository";
import { HorarioFuncionamento } from '../entities/horario_funcionamento.entity';

export class HorarioFuncionamentoRepository extends AbstractRepository<HorarioFuncionamento> {

  constructor() {
    super();
    this.tableName = 'horario_funcionamento';
  }


}