import { AbstractController } from "./abstract.controller";
import { ReturnMessage } from '../../infraestructure/return_message';
import { HttpRequestCode } from "../../infraestructure/enum/http_request_code.enum";
import { RestauranteService } from "../services/restaurante.servive";

export class RestauranteController extends AbstractController {

  private service: RestauranteService;

  constructor() {
    super();
    this.service = new RestauranteService();
  }

  async all() {
    try {
      return await new ReturnMessage(await this.service.get());
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }

  async get(id?: number) {
    try {
      return await new ReturnMessage(await this.service.get(id));
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }
}