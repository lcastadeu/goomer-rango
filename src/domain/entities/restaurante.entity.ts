import { Arquivo } from "./arquivo.entity";

export class Restaurante {
  id: number;
  nome: string;
  endereco: string;
  id_foto?: number;

  foto: Arquivo;
}