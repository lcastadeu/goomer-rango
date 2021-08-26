import { DiaDaSemana } from "../../infraestructure/enum/dia_da_semana.enum";

export class HorarioFuncionamento {
  id: number;
  dia: DiaDaSemana;
  horaInicio: string;
  horaTermino: string;
  aceita_feriado: boolean;
}