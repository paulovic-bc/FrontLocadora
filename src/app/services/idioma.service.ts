import { IdiomaModel } from 'src/app/model/idioma.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }
  getAllIdiomas(){
   return this.http.get<IdiomaModel[]>('api/idiomas')
  }
}
