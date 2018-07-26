import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Anime } from '../shared/models/anime.model';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/operator/do";

@Injectable()
export class AnimeService {
  animeSink = new BehaviorSubject<Anime[]>([]);
  private _animesCount: number = 0;

  set animesCount(count: number){
    this._animesCount = count;
  }

  get animesCount(){
    return this._animesCount;
  }

  constructor(private http: HttpClient) {}

  getAnimes(): Observable<any> {
    return this.animeSink.asObservable().switchMap(() => this.http.get('http://localhost:3000/anime'))
      .do((animes: Array<any>) => this.animesCount = animes.length);
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

