import { AbstractController } from "./abstract.controller";
import { ArquivoService } from '../services/arquivo.service';
import { ArquivoRepository } from '../../domain/repositories/arquivo.repository.';
import { Arquivo } from '../../domain/entities/arquivo.entity';

export class ArquivoController extends AbstractController<Arquivo> {

  constructor() {
    super(new ArquivoService(new ArquivoRepository()));
  }
}