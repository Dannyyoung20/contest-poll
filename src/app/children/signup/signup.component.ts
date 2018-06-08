import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TokenService } from './../../shared/services/token/token.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors: null;

  credentials = {
    email: null,
    password: null,
    password_confirmation: null,
    username: null
  };

  constructor(private auth: AuthService,
              private router: Router,
              private token: TokenService) {}

  ngOnInit() {
  }

  signUp() {
    this.auth.signup(this.credentials)
             .subscribe(result => this.handleResponse(result),
                        error => this.handleError(error));
  }

  handleResponse(result) {
    this.token.handle(result);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.errors = error;
  }

}
