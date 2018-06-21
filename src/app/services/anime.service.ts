import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Anime } from '../shared/models/anime.model';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AnimeService {
  animeSink = new BehaviorSubject<Anime[]>([]);
  constructor(private http: HttpClient) {}

  getAnime(): Observable<any> {
    return this.animeSink.asObservable().switchMap(() => this.http.get('http://localhost:3000/anime'));
  }

  getLastId(): Observable<any> {
    return this.http.get('http://localhost:3000/anime').map((data: Anime[]) => data.length);
  }

  saveAnime(anime: Anime): Observable<any> {
    return this.http.post('http://localhost:3000/anime', anime);
  }

  editAnime(id: number, anime: Anime): Observable<any> {
    const urlParams = new HttpParams().set("id", id.toString());
     return this.http.put(`http://localhost:3000/anime/${id}`, anime, { params: urlParams});
  }

  deleteAnime(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/anime/${id}`);
  }
}

