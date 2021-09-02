import { Router } from 'express';
import { CategoriaProdutoController } from '../controllers/categoria_produto.controller';

const categoriaProdutoRoute = Router();
const controller = new CategoriaProdutoController();

categoriaProdutoRoute.get('/categoriaproduto', async function (request, response) {
  console.log('aqui')
  await response.json(await controller.all());
});

categoriaProdutoRoute.get('/categoriaproduto/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

categoriaProdutoRoute.post('/categoriaproduto/create', async function (request, response) {
  await response.json(await controller.create(await request.body));
});

categoriaProdutoRoute.put('/categoriaproduto/edit/:id', async function (request, response) {
  await response.json(await controller.update(Number(request.params.id), await request.body));
});

categoriaProdutoRoute.delete('/categoriaproduto/delete/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default categoriaProdutoRoute;

