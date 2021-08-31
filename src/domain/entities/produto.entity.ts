import { CategoriaProduto } from './categoria_produto.entity';
import { Arquivo } from './arquivo.entity';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  idCategoria: number;
  idFoto: number;

  categoriaProduto: CategoriaProduto;
  foto: Arquivo;
}