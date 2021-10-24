import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-cad-categoria-form',
  templateUrl: './movie-cad-categoria-form.component.html',
  styleUrls: ['./movie-cad-categoria-form.component.css']
})
export class MovieCadCategoriaFormComponent implements OnInit {
  [x: string]: any;
 formCat: FormGroup;

  constructor( private fb:FormBuilder,private catServ:CategoriaService,private router: Router) { }

  ngOnInit(): void {
    this.formCat = this.fb.group({
      nome_categoria : ['',Validators.required],
      tag_categoria : ['',Validators.required,],

    })


  }

  CreatCat(){

    this.catServ.addCategory(this.formCat.value).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/'])
    },error=>{
      console.log(error)
    })
    console.log(this.formCat.value)
  }



}
