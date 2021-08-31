import { HttpRequestCode } from "../../infraestructure/enum/http_request_code.enum";
import { ReturnMessage } from "../../infraestructure/return_message";
import { AbstractService } from '../services/abstract.service';

export class AbstractController<T> {

  protected service: AbstractService<T>;

  constructor(service: AbstractService<T>) {
    this.service = service;
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

  async store(entidade: T) {
    try {
      return await new ReturnMessage(await this.service.save(entidade));
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }

  async update(id: number, entidade: T) {
    try {
      return await new ReturnMessage(await this.service.update(id, entidade));
    } catch (error) {
      console.log(error);
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }

  async destroy(id: number) {
    try {
      return await new ReturnMessage(await this.service.delete(id));
    } catch (error) {
      return new ReturnMessage(error).setStatusCode(HttpRequestCode.BadRequest);
    }
  }
  
}