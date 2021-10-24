import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCadfilmeFormComponent } from './movie/components/movie-cadfilme-form/movie-cadfilme-form.component';
import { MovieCarouselComponent } from './movie/components/movie-carousel/movie-carousel.component';
import { MovieLoginFormComponent } from './movie/components/movie-login-form/movie-login-form.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCadCategoriaFormComponent } from './movie/components/movie-cad-categoria-form/movie-cad-categoria-form.component';

const routes: Routes = [
  { path: '', component:MovieListComponent },
  { path: 'carousel', component: MovieCarouselComponent},
  { path: 'login', component: MovieLoginFormComponent},
  {path:  'formFilme', component: MovieCadfilmeFormComponent, canActivate:[AuthGuard]},
  {path:  'formCategoria', component:MovieCadCategoriaFormComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
