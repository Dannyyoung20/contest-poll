import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { TokenService } from '../../shared/services/token/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/css/main.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  errors: null;

  credentials = {
    email: null,
    password: null
  };

  constructor(private router: Router,
              private auth: AuthService,
              private token: TokenService) {}

  ngOnInit() {
  }

  signIn () {
    this.auth.login(this.credentials)
             .subscribe(result => this.handleResponse(result),
                        error =>  this.handleError(error));
  }

  handleError(error) {
    this.errors = error;
  }

  handleResponse(data) {
    this.token.handle(data);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
