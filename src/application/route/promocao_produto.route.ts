import { Router } from 'express';
import { PromocaoProdutoController } from '../controllers/promocao_produto.controller';

const promocaoProdutoRoute = Router();
const controller = new PromocaoProdutoController();

promocaoProdutoRoute.get('/promocaoproduto', async function (request, response) {
  await response.json(await controller.all());
});


promocaoProdutoRoute.get('/promocaoproduto/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

promocaoProdutoRoute.post('/promocaoproduto/create', async function (request, response) {
  await response.json(await controller.create(await request.body));
});

promocaoProdutoRoute.put('/promocaoproduto/edit/:id', async function (request, response) {
  await response.json(await controller.update(Number(request.params.id), await request.body));
});

promocaoProdutoRoute.delete('/promocaoproduto/delete/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default promocaoProdutoRoute;

