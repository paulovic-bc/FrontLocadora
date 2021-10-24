import { FilmeService } from './../../../services/filme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaModel } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FilmeModel } from 'src/app/model/filme.model';
import { IdiomaModel } from 'src/app/model/idioma.model';
import { IdiomaService } from 'src/app/services/idioma.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-cadfilme-form',
  templateUrl: './movie-cadfilme-form.component.html',
  styleUrls: ['./movie-cadfilme-form.component.css']
})
export class MovieCadfilmeFormComponent implements OnInit {
  cadFilme : FormGroup;

  categorias:CategoriaModel[]=[];

  idiomas: IdiomaModel[] = []

  ListcadFilme: FilmeModel[] = []

  constructor(private fb:FormBuilder, private FilmeServ: FilmeService, private CatServ: CategoriaService,private idiomaServe:IdiomaService, private router: Router) { }


  ngOnInit(): void {

    this.cadFilme= this.fb.group({
      titulo_filme: ['',Validators.required],
      sinopse_filme: ['',Validators.required],
      imagem_filme:['',Validators.required],
      data_lancamento:['',Validators.required],
      duracao_filme:['',Validators.required],
      categoria:[null,Validators.required],

    });


   this.carregarCat()
   this.getFilmeList()
  }

  carregarCat(){
    this.CatServ.getAllCategory().subscribe(data=>{
      this.categorias = data;
    },error=>{
      console.log(error)
    })
  }

  getFilmeList(){
    this.FilmeServ.getAllFilmes().subscribe(data=>{
      this.ListcadFilme = data;
     },error =>{
       console.log(error)
     })
  }

  createFilme(){

    let filme :FilmeModel = this.cadFilme.value;


    filme.categoria={id: +this.cadFilme.value.categoria};
    console.log(filme);

    this.FilmeServ.addFilme(filme).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/'])
    },error=>{
      console.log(error);
    })
  }


  edittFilme(id:number){
    console.log(id);


  }

  dellFilme(id){

    this.FilmeServ.deleteFilme(id).subscribe(data => {});
    window.location.reload();


  }


  }




