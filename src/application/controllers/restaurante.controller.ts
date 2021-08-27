import { AbstractController } from "./abstract.controller";
import { ReturnMessage } from '../../infraestructure/return_message';
import { HttpRequestCode } from "../../infraestructure/enum/http_request_code.enum";
import { RestauranteService } from "../services/restaurante.servive";
import { RestauranteRepository } from "../../domain/repositories/restaurante.repository";
import { Restaurante } from '../../domain/entities/restaurante.entity';

export class RestauranteController extends AbstractController {

  private service: RestauranteService;

  constructor() {
    super();
    this.service = new RestauranteService(new RestauranteRepository());
  }

  async all() {
    try {
      return await new ReturnMessage(await this.service.findAll())
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }

  async get(id: number) {
    try {
      return await new ReturnMessage(await this.service.find(id));
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }

  async store(restaurante: Restaurante) {
    try {
      return await new ReturnMessage(await this.service.save(restaurante));
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }
}