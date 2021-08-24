import express from 'express';
import { ReturnMessage } from './infraestructure/return_message';

const api = express();

api.get('/', function (_, res) {
  res.status(200).json(new ReturnMessage('Serviço Ativo!'));
});

api.listen(3000, () => {
  console.log('Serviço Ativo')
});

export default api;