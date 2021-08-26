import express from 'express';
import { RestauranteController } from '../controllers/restaurante.controller';

const restauranteRoute = express.Router();
const controller = new RestauranteController();

restauranteRoute.get('/restaurante', async function (request, response){
  response.json(await controller.all());
});

restauranteRoute.get('/restaurante/:id', async function (request, response) {
  response.send(request.params)
});

export default restauranteRoute;

