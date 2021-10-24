import { FilmeModel } from './../../model/filme.model';
import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {



  constructor(public filmeService : FilmeService, public navbarServe: NavbarService) { }

  movieListFilme: FilmeModel[]=[];


  ngOnInit(): void {

    this.carregarFilmes()

    this.navbarServe.EventoFilme.subscribe(filtro=>{
      console.log("dado da busca:",filtro);
      this.filtrarFilmes(filtro);
    })

    this.navbarServe.EventoFilmeByCategory.subscribe(filtro=>{
      console.log("dado da busca:",filtro);
      this.filtraByCategory(filtro);
    })


    //pesquisa categoria



  }
  carregarFilmes(){
    this.filmeService.getAllFilmes().subscribe(data=>{
      this.movieListFilme = data;
     },error =>{
       console.log(error)
     })

  }
  filtrarFilmes(filtro:string){
    if(filtro == "" || filtro == null){
      this.carregarFilmes();
    }else{
      this.filmeService.getFilmeByName(filtro).subscribe(data =>{
        this.movieListFilme = data;
      })
    }

  }
  filtraByCategory(id:number){
    this.filmeService.getFilmeByCategoryId(id).subscribe(data =>{
      this.movieListFilme = data;

    },error =>{
      console.log(error)
    })

  }



}
