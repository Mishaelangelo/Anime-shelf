import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalFormsComponent } from './shared/modal-forms/modal-forms.component';
import {HttpClientModule} from '@angular/common/http';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeComponent } from './anime/anime.component';
import {AnimeService} from './services/anime.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    ModalFormsComponent,
    AnimeListComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
