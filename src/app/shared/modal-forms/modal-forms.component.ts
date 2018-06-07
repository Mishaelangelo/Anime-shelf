import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Anime} from '../models/anime.model';
import {HttpClient} from '@angular/common/http';
import {AnimeService} from '../../services/anime.service';
import switchMap from 'rxjs/operator/switchMap';


@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.css']
})
export class ModalFormsComponent {
  title: string = `Title:`;
  season: string = `Season:`;
  year: string = `Year:`;
  cover: string = `Cover:`;
  link: string = `Link:`;

 // anime: Anime = new Anime();
  //receivedUser: Anime;
  //done: boolean = false;

   constructor(private http: HttpClient, private animeService: AnimeService){
  }

  onSubmit(form: NgForm){
     this.animeService.getId().switchMap((data) => {
       form.value.id = data.id++;
       return this.http.post('http://localhost:3000/anime', form.value).subscribe(() => {console.log("hi");},
         error => console.log(error));
     });

  }

}
