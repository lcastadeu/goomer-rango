import { AbstractController } from "./abstract.controller";
import { Produto } from '../../domain/entities/produto.entity';
import { ProdutoService } from '../services/produto.service';
import { ProdutoRepository } from "../../domain/repositories/produto.repository";

export class ProdutoController extends AbstractController<Produto> {

  constructor() {
    super(new ProdutoService(new ProdutoRepository()));
  }
  
}