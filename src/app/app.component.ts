import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp(  {
      apiKey: "AIzaSyAT_zgxtxMl1BLSJHvzo6HBOKqcyDVMRNs",
      authDomain: "anime-shelf.firebaseapp.com",
      databaseURL: "https://anime-shelf.firebaseio.com",
      projectId: "anime-shelf",
      storageBucket: "anime-shelf.appspot.com",
      messagingSenderId: "425069841082"
    });
  }
}
