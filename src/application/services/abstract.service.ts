import { AbstractRepository } from '../../domain/repositories/abstract.repository';

export class AbstractService<T> {

  protected repository: AbstractRepository<T>;

  constructor(repository: AbstractRepository<T>) {
    this.repository = repository;
  }

  async find(id: number) {
    return await this.repository.find(id);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async save(entidade: T) {
    return await this.repository.save(entidade);
  }

  async delete(id: number) {

  }
}