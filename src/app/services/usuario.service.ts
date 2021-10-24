import { UsuarioModel } from './../model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  getAllUsers(){
    const token = localStorage.getItem('login')||''

      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.get<UsuarioModel[]>('api/usuarios',{headers})

  }
  getUsersById(id:number){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.get<UsuarioModel>('api/usuario' +id ,{headers})
    }else{
      return "Usuario não autentificado"
    }
  }

  additUsers(users: UsuarioModel){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.post<UsuarioModel>('api/usuario' ,users ,{headers})
    }else{
      return "Usuario não autentificado"
    }
  }
  editUsers(users: UsuarioModel){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.post<UsuarioModel>('api/usuario' ,users ,{headers})
    }else{
      return "Usuario não autentificado"
    }
  }
  DeleteUsers(id:number){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.post<any>('api/usuario' +id ,{headers})
    }else{
      return "Usuario não autentificado"
    }
  }
}
