import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Anime} from '../shared/models/anime.model';
import {AnimeService} from '../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes$: Observable<Anime[]>;
  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.animeSink.next(null);
    this.animes$ = this.animeService.getAnime();
  }

}
