import {Routes, RouterModule} from '@angular/router';
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
import { SignComponent } from './sign/sign.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import {AuthService} from "./auth-service";
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAT_zgxtxMl1BLSJHvzo6HBOKqcyDVMRNs",
  authDomain: "anime-shelf.firebaseapp.com",
  databaseURL: "https://anime-shelf.firebaseio.com",
  projectId: "anime-shelf",
  storageBucket: "anime-shelf.appspot.com",
  messagingSenderId: "425069841082"
};

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'sign', component: SignComponent },
  { path: 'email-login', component: EmailLoginComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    ModalFormsComponent,
    AnimeListComponent,
    AnimeComponent,
    SignComponent,
    EmailLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AnimeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
