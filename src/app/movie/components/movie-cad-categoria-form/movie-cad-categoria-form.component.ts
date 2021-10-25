import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-movie-cad-categoria-form',
  templateUrl: './movie-cad-categoria-form.component.html',
  styleUrls: ['./movie-cad-categoria-form.component.css']
})
export class MovieCadCategoriaFormComponent implements OnInit {
  [x: string]: any;
 formCat: FormGroup;
 ListCatForm: CategoriaModel[] =[]

  constructor( private fb:FormBuilder,private catServ:CategoriaService,private router: Router) { }

  ngOnInit(): void {
    this.formCat = this.fb.group({
      nome_categoria : ['',Validators.required],
      tag_categoria : ['',Validators.required,],

    })
    this.getCategoryList();


  }
  editCat(id):void{
    this.formCat.setValue({
      nome_categoria : id.nome_categoria,
      tag_categoria: id.tag_categoria
    })
    this.catServ.deleteCategory(id.id).subscribe(data => {})


  }



  CreatCat(){

    this.catServ.addCategory(this.formCat.value).subscribe(data=>{
      console.log(data)
      this.router.navigate([''])
    },error=>{
      console.log(error)
    })
    console.log(this.formCat.value)

  }

  getCategoryList(){
    this.catServ.getAllCategory().subscribe(data=>{
      this.ListCatForm = data;
    },error=>{
      console.log(error)
    })
  }

  deleteCategory(id){
    console.log(id)
    this.catServ.deleteCategory(id).subscribe(data=>{})
    alert("Categoria deletado com sucesso!");
    window.location.reload();

  }




}
