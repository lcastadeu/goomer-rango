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
  try {
    response.send(await controller.store(await request.body));
  } catch (error) {
  }
});

// restauranteRoute.get('/restaurante/:id', async function (request, response) {
//   await response.json(await controller.get(Number(request.params.id)));
// });

// restauranteRoute.get('/restaurante/:id', async function (request, response) {
//   await response.json(await controller.get(Number(request.params.id)));
// });

export default restauranteRoute;

