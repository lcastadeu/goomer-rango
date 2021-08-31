import { AbstractController } from "./abstract.controller";
import { ReturnMessage } from '../../infraestructure/return_message';
import { HttpRequestCode } from "../../infraestructure/enum/http_request_code.enum";
import { RestauranteService } from "../services/restaurante.service";
import { RestauranteRepository } from "../../domain/repositories/restaurante.repository";
import { Restaurante } from '../../domain/entities/restaurante.entity';

export class RestauranteController extends AbstractController<Restaurante> {

  constructor() {
    super(new RestauranteService(new RestauranteRepository()));
  }

  
}