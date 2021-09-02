import arquivoRoute from "./arquivo.route";
import categoriaProdutoRoute from "./categoria_produto.route";
import restauranteRoute from "./resturante.route";

const versionNumber = '/api/v1';

export default (api: any) => {
  api.use(versionNumber, restauranteRoute);
  api.use(versionNumber, categoriaProdutoRoute);
  api.use(versionNumber, arquivoRoute);
}

