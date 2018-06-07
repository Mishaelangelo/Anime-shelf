import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Anime} from '../shared/models/anime.model';

@Injectable()
export class AnimeService {

  constructor(private http: HttpClient) {}

  getAnime(): Observable<any> {
   return this.http.get('http://localhost:3000/anime');
  }

  getId(): Observable<any> {
    return this.http.get('http://localhost:3000/anime');
  }
}
