import express, { Application, Request, Response } from 'express';
import { HttpRequestCode } from './infraestructure/enum/http_request_code.enum';
import { ReturnMessage } from './infraestructure/return_message';
import swaggerJSDoc, { OAS3Options } from "swagger-jsdoc";
import { readFileSync } from 'fs';
import * as path from 'path';
import bodyParser from 'body-parser';
import appRoute from './application/route/app.route';
import database from './infraestructure/database/database.connection';

const api: Application = express();

var cors = require('cors')
api.use(cors());

const swaggerUi = require('swagger-ui-express');
const specs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Goomer Rango",
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

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.get('/', (req: Request, res: Response) => {
  res.status(HttpRequestCode.Ok).json(new ReturnMessage('Serviço Ativo!'));
});

appRoute(api);

api.listen(3000, async () => {
  await database(true).connect().then(async pool => {
    await pool.query("select * from pg_database where datname = 'goomer'").then(async x => {
      if(x.rowCount <= 0) {
        pool.query("CREATE DATABASE goomer;").then(db => {
          let script = readFileSync(path.join(__dirname, '/files/startup.table.sql'), { encoding: 'utf-8' });
          database().query(script);
        });
      }
    });
  });
  console.log('Serviço Ativo');
});

export default api;