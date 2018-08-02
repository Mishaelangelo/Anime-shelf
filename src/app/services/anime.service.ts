import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Anime } from '../shared/models/anime.model';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class AnimeService {
  animeSink = new BehaviorSubject<Anime[]>([]);

  private animesCountSink: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get animesCount$() {
    return this.animesCountSink.asObservable();
  }

  constructor(private http: HttpClient) {}

  getAnimes(): Observable<Anime[]> {
    return this.animeSink.asObservable().switchMap(() => this.http.get<Anime[]>('http://localhost:3000/anime'))
      .do((animes: Anime[]) => this.animesCountSink.next(animes.length));
  }

  getAnime(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/anime/${id}`);
  }

  getLastId(): Observable<any> {
    return this.http.get('http://localhost:3000/anime').map((data: Anime[]) => data.length);
  }

  saveAnime(anime: Anime): Observable<any> {
    return this.http.post('http://localhost:3000/anime', anime);
  }

  editAnime(anime: Anime): Observable<any> {
     return this.http.put(`http://localhost:3000/anime/${anime.id}`, anime);
  }

  deleteAnime(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/anime/${id}`);
  }
}

