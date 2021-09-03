import { HorarioFuncionamento } from './horario_funcionamento.entity';
import { PromocaoProduto } from './promocao_produto.entity';

export class HorarioPromocaoProduto {
  id_horario: number;
  id_promocao_produto: number;
  ativo: boolean;

  horarioFuncionario: HorarioFuncionamento;
  promocaoProduto: PromocaoProduto;
}