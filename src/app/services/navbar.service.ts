import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
 EventoFilme: EventEmitter<string> = new EventEmitter()

 EventoContrast: EventEmitter<boolean> = new EventEmitter()


 EventoFilmeByCategory: EventEmitter<number> = new EventEmitter()

  constructor() { }
  filtroFilme(filtro: string){
    this.EventoFilme.emit(filtro)
  }

  filtroFilmeByCategory(id: number){
    this.EventoFilmeByCategory.emit(id)
  }

  contrast(contrast:boolean){
    this.EventoContrast.emit(contrast)
  }



}
