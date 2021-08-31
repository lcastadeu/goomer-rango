import express from 'express';
import { RestauranteController } from '../controllers/restaurante.controller';

const restauranteRoute = express.Router();
const controller = new RestauranteController();

restauranteRoute.get('/restaurante', async function (request, response) {
  await response.json(await controller.all());
});

restauranteRoute.get('/restaurante/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

restauranteRoute.post('/restaurante', async function (request, response) {
  await response.json(await response.send(await controller.store(await request.body)));
});

restauranteRoute.put('/restaurante/:id', async function (request, response) {
  await response.send(await controller.update(Number(request.params.id), request.body));
});

restauranteRoute.delete('/restaurante/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default restauranteRoute;

