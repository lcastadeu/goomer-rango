import express from 'express';
import restauranteRoute from './application/route/resturante.route';
import { HttpRequestCode } from './infraestructure/enum/http_request_code.enum';
import { ReturnMessage } from './infraestructure/return_message';
import database from './infraestructure/database/database.connection';
import { readFileSync } from 'fs';
import * as path from 'path';


const api = express();

api.get('/', function (_, res) {
  res.status(HttpRequestCode.Ok).json(new ReturnMessage('Serviço Ativo!'));
});

api.use('/api', restauranteRoute);

api.listen(3000, async () => {

  const scriptStartup = readFileSync(path.join(__dirname, '/infraestructure/seed/startup.sql'), { encoding: 'utf-8' })
  await database.connect().then(async pool => {
    await pool.query(scriptStartup);
  });

  console.log('Serviço Ativo');
});

export default api;