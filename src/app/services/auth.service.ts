import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email:string, senha:string){
    return this.http.post<any>('api/auth', {email, senha});
    }
}
