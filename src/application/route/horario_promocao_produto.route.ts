import { Router } from 'express';
import { HorarioFuncionamentoController } from '../controllers/horario_funcionamento.controller';
import { HorarioPromocaoProdutoController } from '../controllers/horario_promocao_produto.controller';

const horarioPromocaoProdutoRoute = Router();
const controller = new HorarioPromocaoProdutoController();

horarioPromocaoProdutoRoute.get('/horario/promocaoproduto/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

horarioPromocaoProdutoRoute.post('/horario/promocaoproduto/create', async function (request, response) {
  await response.json(await controller.add(await request.body));
});

horarioPromocaoProdutoRoute.delete('/horario/promocaoproduto/delete/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default horarioPromocaoProdutoRoute;

