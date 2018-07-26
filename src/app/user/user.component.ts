import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import {AnimeService} from '../services/anime.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  animesCount: number = this.animeService.animesCount;

  constructor(private authService: AuthService, private animeService: AnimeService) { }

  ngOnInit() {
  }

  Logout() {
    this.authService.logout();
  }
}
