import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  signUp(password: string ,email: string){
    firebase.auth().createUserWithEmailAndPassword(password, email).catch(error =>console.log('ERROR HAPPEND'))
  }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
       response => console.log('SUCCESS LOGIN')
    ).catch();
  }
}
