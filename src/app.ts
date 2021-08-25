import express from 'express';
import { ReturnMessage } from './infraestructure/return_message';
import { DatabaseCommand } from './infraestructure/database/database.command';

const api = express();

api.get('/', function (_, res) {
  res.status(200).json(new ReturnMessage('Serviço Ativo!'));
});

api.listen(3000, async () => {
  console.log('Serviço Ativo');
});

export default api;