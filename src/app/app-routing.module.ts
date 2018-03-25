import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoticiasComponent} from './noticias/noticias.component';
import {PeliculasComponent} from './peliculas/peliculas.component';
import {SeriesComponent} from './series/series.component';
import {ContactanosComponent} from './contactanos/contactanos.component';
import {PeliculaInfoComponent} from './pelicula-info/pelicula-info.component';
import {SerieInfoComponent} from './serie-info/serie-info.component';
import {NoticiasInfoComponent} from './noticias-info/noticias-info.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/noticias', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'peliculas/:id', component: PeliculaInfoComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SerieInfoComponent },
  { path: 'noticias/:id', component: NoticiasInfoComponent },
  { path: 'contactanos', component: ContactanosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
