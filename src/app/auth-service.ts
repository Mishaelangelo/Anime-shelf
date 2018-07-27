import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import Swal from 'sweetalert2';


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        Swal('Successful login!', 'Now you now you can log in to your account!!!', 'success');
        this.router.navigate(['email-login']);
      })
      .catch(error => Swal('Oops!', 'Wrong email or your password contains less than 6 symbols!!!', 'error'));
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => this.router.navigate(['shelf'])
      ).catch(error => Swal('Oops!', 'Wrong email or password!', 'error'));
  }

  loginFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()).then(response => this.router.navigate(['shelf']));
  }

  loginGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(response => this.router.navigate(['shelf']));
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
   }
 }
