import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { ProductService } from './service/product.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // images urls
  GreetingMessage: any;
  Timer: number = 1;
  Message1 = " Hi Hello How Are You..!";
  Message2 = "It'S Good Day To Buy Products..!";
  Message3 = " We  Are  Offering  40 %  OFF %  Now..!";
  Message4 = "HURRY UP..!";
  Message5 = "LET'S GO ...! SHOP WITH 40% OFF";



  // title
  title = 'AddToCart';

  // if condition
  expression: boolean = true;
  LOrR: boolean = true;

  // login form data
  login: FormGroup | any;

  // signup form data
  signup: FormGroup | any;
  signuser: any;

  constructor(private _http: HttpClient, private _route: Router, private productservice: ProductService) { }
  ngOnInit(): void {
    // login intialise
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });

    // signup initialise
    this.signup = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl(),
      'password': new FormControl()
    });

    setInterval(() => {
      this.Timer = this.Timer + 1;

      switch (this.Timer) {
        case 1:
          this.GreetingMessage = this.Message1;
          break;
        case 2:
          this.GreetingMessage = this.Message2;
          break;
        case 3:
          this.GreetingMessage = this.Message3;
          break;
        case 4:
          this.GreetingMessage = this.Message4;
          break;
        case 5:
          this.GreetingMessage = this.Message5;
          break;
      }

      if (this.Timer == 5) {
        this.Timer = 0;
      }

    }, 1400)

  }

  // login logic
  LoginUser(login: FormGroup) {
    console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/register").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.login.value.email && a.password === this.login.value.password;
      });

      if (user) {
        alert('you are successfully login');
        this.expression = !this.expression;
        this.login.reset();
      } else {
        alert('User Not Found');
      }
    }, err => {
      alert('Something was wrong');
    })
  }

  // signup logic
  SignUpUser(signup: any) {
    this.productservice.Register(signup.value).subscribe(() => {
      alert('successfully register...');
      this.signup.reset();
    })
  }

  // logout
  logout() {
    this.expression = false;
  }
}
