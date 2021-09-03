import { Router } from 'express';
import { HorarioFuncionamentoController } from '../controllers/horario_funcionamento.controller';

const horarioFuncionamentoRoute = Router();
const controller = new HorarioFuncionamentoController();

horarioFuncionamentoRoute.get('/horariofuncionamento', async function (request, response) {
  await response.json(await controller.all());
});


horarioFuncionamentoRoute.get('/horariofuncionamento/:id', async function (request, response) {
  await response.json(await controller.get(Number(request.params.id)));
});

horarioFuncionamentoRoute.post('/horariofuncionamento/create', async function (request, response) {
  await response.json(await controller.create(await request.body));
});

horarioFuncionamentoRoute.put('/horariofuncionamento/edit/:id', async function (request, response) {
  await response.json(await controller.update(Number(request.params.id), await request.body));
});

horarioFuncionamentoRoute.delete('/horariofuncionamento/delete/:id', async function (request, response) {
  await response.json(await controller.destroy(Number(request.params.id)));
});

export default horarioFuncionamentoRoute;

