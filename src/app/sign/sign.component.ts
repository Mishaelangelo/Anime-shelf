import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service';
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
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email , password);
  }
}
