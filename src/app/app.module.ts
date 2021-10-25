import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCardsComponent } from './movie/components/movie-cards/movie-cards.component';
import { MovieCarouselComponent } from './movie/components/movie-carousel/movie-carousel.component';
import { MovieLoginFormComponent } from './movie/components/movie-login-form/movie-login-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieCadfilmeFormComponent } from './movie/components/movie-cadfilme-form/movie-cadfilme-form.component';
import { MovieCadCategoriaFormComponent } from './movie/components/movie-cad-categoria-form/movie-cad-categoria-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    MovieCardsComponent,
    MovieCarouselComponent,
    MovieLoginFormComponent,
    MovieCadfilmeFormComponent,
    MovieCadCategoriaFormComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
