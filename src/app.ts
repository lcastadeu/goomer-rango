import express from 'express';
import restauranteRoute from './application/route/resturante.route';
import { ReturnMessage } from './infraestructure/return_message';

const api = express();

api.get('/', function (_, res) {
  res.status(200).json(new ReturnMessage('Serviço Ativo!'));
});

api.use('/api', restauranteRoute);

api.listen(3000, async () => {
  console.log('Serviço Ativo');
});

export default api;