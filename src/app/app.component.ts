import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontLocadora';
  constructor(private navbarServ: NavbarService){
    this.navbarServ.EventoContrast.subscribe(data =>{
      if(data) {
        document.body.classList.add('contrast');
      } else {
        document.body.classList.remove('contrast');
      }
    })

  }
}


