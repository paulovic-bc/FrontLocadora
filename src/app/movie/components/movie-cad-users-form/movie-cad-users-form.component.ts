import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-cad-users-form',
  templateUrl: './movie-cad-users-form.component.html',
  styleUrls: ['./movie-cad-users-form.component.css']
})
export class MovieCadUsersFormComponent implements OnInit {
formUsers: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formUsers= this.fb.group({
      cpf_usuario:['',Validators.required],
      telefone_telefone:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      perfil_usuario:['',Validators.required],
      perfil:['',Validators.required],
    })
  }

}
