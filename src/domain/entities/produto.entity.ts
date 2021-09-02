import { CategoriaProduto } from './categoria_produto.entity';
import { Arquivo } from './arquivo.entity';

export class Produto {
  id: number;
  id_restaurante: number;
  nome: string;
  preco: number;
  id_categoria: number;
  id_foto: number;

  categoriaProduto: CategoriaProduto;
  foto: Arquivo;
}