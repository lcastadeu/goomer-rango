import { Router } from 'express';
import { RestauranteController } from '../controllers/restaurante.controller';

const restauranteRoute = Router();
const controller = new RestauranteController();

restauranteRoute.get('/restaurante', async function (request, response) {
  await response.json(await controller.all());
});


restauranteRoute.get('/restaurante/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

restauranteRoute.post('/restaurante/create', async function (request, response) {
  await response.json(await controller.create(await request.body));
});


restauranteRoute.put('/restaurante/edit/:id', async function (request, response) {
  await response.json(await controller.update(Number(request.params.id), await request.body));
});

restauranteRoute.delete('/restaurante/delete/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default restauranteRoute;

