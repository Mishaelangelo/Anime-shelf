import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../services/anime.service';
import {Observable} from 'rxjs/Observable';
import {Anime} from '../shared/models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  anime$: Observable<Anime[]>;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.anime$ = this.animeService.getAnime();
  }

}
