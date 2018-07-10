import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    //const login = form.value.login;
    const password = form.value.password;
    const email = form.value.email;

    this.authService.login(password, email);
  }
}
