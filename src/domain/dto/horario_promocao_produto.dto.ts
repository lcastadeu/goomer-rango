import { DiaDaSemana } from '../../infraestructure/enum/dia_da_semana.enum';

export class HorarioPromocaoProdutoDTO {
  id_produto: number;
  dia: DiaDaSemana;
  hora_inicio: string;
  hora_termino: string;
  exceto_feriado: string;
}