import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../model/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<CategoriaModel[]>('api/categorias')
  }
  getAllById(id: number){
    return this.http.get<CategoriaModel>('api/categoriaId' + id)
  }
  addCategory(category:any):Observable<CategoriaModel>{
    const token = localStorage.getItem('login')||''

      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.post<any>('api/categoria', category, {headers})

  }
  editCategory(category:CategoriaModel){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.post<CategoriaModel>('api/categoria', category, {headers})
    }else{
      return "Usuario não autentificado"
    }
  }
  deleteCategory(id: number){
    const token = localStorage.getItem('login')
    if (token != null){
      const headers = new HttpHeaders().append('Authorization',token)
      return this.http.put<any>('api/categoria' + id, {headers})
    }else{
      return "Usuario não autentificado"
    }
  }
}
