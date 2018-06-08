import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../general/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: baseApiUrl + '/login',
    signup: baseApiUrl + '/signup'
  };

  constructor() {}

  handle(token) {
    this.setToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  decodePayload(payload) {
    return JSON.parse(atob(payload));
  }

  getPayload(token) {
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  isTokenValid() {
    const token = this.getToken();

    if (token) {
      const payload = this.getPayload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
  }

  isLoggedIn() {
    return this.isTokenValid();
  }
}
