import { Observable } from 'rxjs';
import { FilmeModel } from './../model/filme.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class FilmeService {

  constructor(private http: HttpClient) { }
getAllFilmes(){
  return this.http.get<FilmeModel[]>('api/filmes')
}
getFilmeById(id:number){
  return this.http.get<FilmeModel>('api/filmeId'+id)
}
getFilmeByCategoryId(id:number){
  return this.http.get<FilmeModel[]>('api/filmeBCat/'+id)
}
getFilmeByName(filmeName:string){
  return this.http.get<FilmeModel[]>('api/filmeName/'+filmeName)
}

addFilme(filme:FilmeModel){
  const token = localStorage.getItem('login')||''

    const headers = new HttpHeaders().append('Authorization',token)
    return this.http.post<FilmeModel>('api/filme', filme, {headers})

}
editFilme(filme:FilmeModel){
  const token = localStorage.getItem('login')||''

    const headers = new HttpHeaders().append('Authorization',token)
    return this.http.put<FilmeModel>('api/filme/', filme, {headers})

}
deleteFilme(id: number){
  const token = localStorage.getItem('login')||''

    const headers = new HttpHeaders().append('Authorization',token)
    return this.http.delete<any>('api/filme/' + id, {headers})

}

}
