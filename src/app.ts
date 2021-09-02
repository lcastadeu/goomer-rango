import express from 'express';
import { HttpRequestCode } from './infraestructure/enum/http_request_code.enum';
import { ReturnMessage } from './infraestructure/return_message';
import database from './infraestructure/database/database.connection';
import swaggerJSDoc, { OAS3Options } from "swagger-jsdoc";
import { readFileSync } from 'fs';
import * as path from 'path';
import bodyParser from 'body-parser';
import appRoute from './application/route/app.route';


const api = express();
var cors = require('cors')

api.use(cors());

const swaggerUi = require('swagger-ui-express');
const specs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Goome Rango",
      version: "1.0.0",
      description: "Solução proposta como desafio pela Goomer para ingresso de colaborador! Let's Goomer!!!",
      contact: {
        name: "Lucas Tadeu H. Lustosa",
        url: "https://www.linkedin.com/in/lcastadeu/",
        email: "lcas.tadeu@hotmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        name: "Desenvolvimento"
      },
    ]
  },
  explorer: true,
  apis: ['swagger.yaml']
} as OAS3Options);

api.use('/api-doc', swaggerUi.serve, swaggerUi.setup(specs))

api.use(bodyParser());

api.get('/', function (_, res) {
  res.status(HttpRequestCode.Ok).json(new ReturnMessage('Serviço Ativo!'));
});

appRoute(api);

api.listen(3000, async () => {
  const scriptStartup = readFileSync(path.join(__dirname, '/infraestructure/seed/startup.sql'), { encoding: 'utf-8' })
  await database.connect().then(async pool => {
    await pool.query(scriptStartup);
  });
  console.log('Serviço Ativo');
});

export default api;