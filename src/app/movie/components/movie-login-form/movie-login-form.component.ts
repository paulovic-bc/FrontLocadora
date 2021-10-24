import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie-login-form',
  templateUrl: './movie-login-form.component.html',
  styleUrls: ['./movie-login-form.component.css']
})
export class MovieLoginFormComponent implements OnInit {

  email:"";
  senha:"";


  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    this.authService.login(this.email, this.senha).subscribe(data => {
      const {token,tipo} = data;
      localStorage.setItem('login',`${tipo} ${token}`)
    },error =>{
      console.log(error)
    })
  }

}
