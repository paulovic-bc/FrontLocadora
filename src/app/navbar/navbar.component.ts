import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../model/categoria.model';
import { CategoriaService } from '../services/categoria.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contrast: boolean = false;
  filtro:"";

  categorias: CategoriaModel[]=[]
  constructor(private catService: CategoriaService, private navbarServe: NavbarService) { }

  ngOnInit(): void {
    this.catService.getAllCategory().subscribe(data=>{
      this.categorias = data
    })
  }
  pesquisar(){
    console.log("teste busca")
     this.navbarServe.filtroFilme(this.filtro)


  }
  pesquisaCat(id:number){
    this.navbarServe.filtroFilmeByCategory(id)
  }

  changeContrast(){
    this.contrast = !this.contrast;
    this.navbarServe.contrast(this.contrast)
  }
}
