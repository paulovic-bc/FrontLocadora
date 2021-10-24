import { IdiomaModel } from './idioma.model';
import { PerfilModel } from './perfil.model';
export class UsuarioModel{
  id?:number;
  cpf_usuario:string;
  telefone_telefone:string;
  email:string;
  senha:string;
  perfil_usuario:string;
  perfil?:PerfilModel;

}
