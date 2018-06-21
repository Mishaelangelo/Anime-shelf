import {Component, Input, OnInit} from '@angular/core';
import {Anime} from '../shared/models/anime.model';
import {AnimeService} from '../services/anime.service';


@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() anime: Anime;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {}

  editAnime(): void {
    const { id } = this.anime;
    this.animeService.editAnime(id, )
      .subscribe(() => this.animeService.animeSink.next(null));
  }

  deleteAnime(): void {
    const { id } = this.anime;
    this.animeService.deleteAnime(id)
      .subscribe(() => this.animeService.animeSink.next(null));
  }
}
