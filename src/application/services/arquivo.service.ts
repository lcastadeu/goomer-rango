import { AbstractService } from './abstract.service';
import { Arquivo } from '../../domain/entities/arquivo.entity';
import { ArquivoRepository } from '../../domain/repositories/arquivo.repository.';

export class ArquivoService extends AbstractService<Arquivo> {

  constructor(protected repository: ArquivoRepository) {
    super(repository);

  }
}