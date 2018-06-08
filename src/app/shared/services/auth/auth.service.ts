import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject <boolean>(this.token.isLoggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor(private http: Http,
              private token: TokenService) {}

  login(credentials) {
    return this.http.post('api/login', JSON.stringify(credentials));
  }

  signup(credentials) {
    return this.http.post('api/signup', JSON.stringify(credentials));
  }

  changeAuthStatus(value: boolean ) {
    this.loggedIn.next(value);
  }
}
