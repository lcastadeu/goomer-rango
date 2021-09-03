import { DiaDaSemana } from "../../infraestructure/enum/dia_da_semana.enum";

export class HorarioFuncionamento {
  id?: number;
  dia: DiaDaSemana;
  hora_inicio: string;
  hora_termino: string;
  aceitar_feriado: boolean;
}