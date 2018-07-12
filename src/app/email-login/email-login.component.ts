import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password);
  }
}
