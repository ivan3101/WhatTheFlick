import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { PeliculaInfoComponent } from './pelicula-info/pelicula-info.component';
import { SerieInfoComponent } from './serie-info/serie-info.component';
import { NoticiasInfoComponent } from './noticias-info/noticias-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SlicePipe } from './pipes/slice.pipe';
import {ArticleService} from './services/article.service';
import {MovieService} from './services/movie.service';
import {SerieService} from './services/serie.service';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    PeliculasComponent,
    SeriesComponent,
    ContactanosComponent,
    PeliculaInfoComponent,
    SerieInfoComponent,
    NoticiasInfoComponent,
    SlicePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
    MovieService,
    SerieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
