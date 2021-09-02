import { Router } from 'express';
import { ArquivoController } from '../controllers/arquivo.controller';

const arquivoRoute = Router();
const controller = new ArquivoController();

arquivoRoute.get('/restaurante', async function (request, response) {
  await response.json(await controller.all());
});

arquivoRoute.get('/restaurante/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

arquivoRoute.post('/restaurante', async function (request, response) {
  await response.json(await controller.create(request.body));
});

arquivoRoute.put('/restaurante/:id', async function (request, response) {
  await response.json(await controller.update(Number(request.params.id), request.body));
});

arquivoRoute.delete('/restaurante/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default arquivoRoute;

