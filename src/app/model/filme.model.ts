import { CategoriaModel } from "./categoria.model";
import { IdiomaModel } from "./idioma.model";

export class FilmeModel{

  id?:number;
  titulo_filme?: string;
  sinopse_filme?:string;
  imagem_filme?:string;
  data_lancamento?:string;
  duracao_filme?:string;
  categoria?: CategoriaModel;

}
