import arquivoRoute from "./arquivo.route";
import categoriaProdutoRoute from "./categoria_produto.route";
import restauranteRoute from "./resturante.route";
import produtoRoute from './produto.route';
import horarioFuncionamentoRoute from './horario_funcionamento.route';
import promocaoProdutoRoute from './promocao_produto.route';
import horarioPromocaoProdutoRoute from './horario_promocao_produto.route';

const versionNumber = '/api/v1';

export default (api: any) => {
  api.use(versionNumber, restauranteRoute);
  api.use(versionNumber, categoriaProdutoRoute);
  api.use(versionNumber, arquivoRoute);
  api.use(versionNumber, produtoRoute);
  api.use(versionNumber, horarioFuncionamentoRoute);
  api.use(versionNumber, horarioPromocaoProdutoRoute);
  api.use(versionNumber, promocaoProdutoRoute);
}

