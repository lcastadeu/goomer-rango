import { AbstractService } from './abstract.service';
import { HorarioPromocaoProdutoRepository } from '../../domain/repositories/horario_promocao_produto.repository';
import { HorarioPromocaoProduto } from '../../domain/entities/horario_promocao_produto.entity';
import { HorarioPromocaoProdutoDTO } from '../../domain/dto/horario_promocao_produto.dto';
import { HorarioFuncionamentoRepository } from '../../domain/repositories/horario_funcionamento.repository';
import { HoraFuncionamentoValidator } from '../../domain/validator/hora_funcionamento.validator';
import { DiaDaSemana } from '../../infraestructure/enum/dia_da_semana.enum';

export class HorarioPromocaoProdutoService extends AbstractService<HorarioPromocaoProduto> {

  private dia: { [key: string]: DiaDaSemana } = {
    'Domingo': DiaDaSemana.Dormingo,
    'Segunda': DiaDaSemana.Segunda,
    'Terca': DiaDaSemana.Terca,
    'Quarta': DiaDaSemana.Quarta,
    'Quinta': DiaDaSemana.Quita,
    'Sexta': DiaDaSemana.Sexta,
    'Sabado': DiaDaSemana.Sabado
  };

  constructor(protected repository: HorarioPromocaoProdutoRepository) {
    super(repository);
  }

  async add(horario: HorarioPromocaoProdutoDTO) {

    if (horario.hora_inicio.split(':').length !== 2)
      throw new Error('Data de início não informda corretamente. Certifique-se de que a mesma foi informada.')

    const horainicio = await new HoraFuncionamentoValidator(horario.hora_inicio, horario.hora_termino);

    await horainicio.validaHoraMinuto()
      .validaLimiteTempo();

    const funcionamento = {
      dia: await this.dia[horario.dia],
      hora_inicio: horario.hora_inicio,
      hora_termino: horario.hora_termino,
      aceitar_feriado: horario.aceitar_feriado
    };

    return await new HorarioFuncionamentoRepository()
      .save(funcionamento)
      .then(async data => {

        const funcionamentoPromocao = {
          id_horario: data.id,
          id_promocao_produto: horario.id_produto
        };

        await super.save(funcionamentoPromocao as HorarioPromocaoProduto);

        return await data;
      });
  }

  async drop(id_promocao_produto: number, id_horario: number) {
    await (this.repository as HorarioPromocaoProdutoRepository).drop(id_promocao_produto, id_horario);
  }
}
