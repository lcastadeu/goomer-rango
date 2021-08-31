import { AbstractRepository } from '../../domain/repositories/abstract.repository';

export class AbstractService<T> {

  protected repository: AbstractRepository<T>;

  constructor(repository: AbstractRepository<T>) {
    this.repository = repository;
  }

  async find(id: number) {
    
    if (!id)
      throw new Error('Código não informado!');

    return await this.repository.find(id);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async save(entidade: T) {
    return await this.repository.save(entidade);
  }

  async update(id: number, entidade: T) {

    if (!id)
      throw new Error('Código não informado!');

    const object = await this.find(id);
    if (!object)
      throw new Error('Registro não encontrado! Por favor, tente um registro válido.')

    return await this.repository.update(id, entidade);
  }

  async delete(id: number) {

    if (!id)
      throw new Error('Código não informado!');

    const object = await this.find(id);
    if (!object)
      throw new Error('Registro não encontrado! Por favor, tente um registro válido.')

    return await this.repository.delete(id);
  }
}