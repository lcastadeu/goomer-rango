import arquivoRoute from "./arquivo.route";
import restauranteRoute from "./resturante.route";

const versionNumber = '/api/v1';

export default (api: any) => {
  api.use(versionNumber, restauranteRoute);
  api.use(versionNumber, arquivoRoute);
}

