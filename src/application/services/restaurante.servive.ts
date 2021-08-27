import { AbstractService } from './abstract.service';
import { Restaurante } from '../../domain/entities/restaurante.entity';
import { RestauranteRepository } from '../../domain/repositories/restaurante.repository';
export class RestauranteService extends AbstractService<Restaurante> {

  constructor(protected repository: RestauranteRepository) {
    super(repository);

  }
}