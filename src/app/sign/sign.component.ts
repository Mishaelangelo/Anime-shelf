import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm){
    //const login = form.value.login;
    const password = form.value.password;
    const email = form.value.email;

    this.authService.signUp(email , password);
  }
}
