import {Component, Input, OnInit} from '@angular/core';
import {Anime} from '../shared/models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() anime: Anime;

  constructor() { }

  ngOnInit() {}
}
