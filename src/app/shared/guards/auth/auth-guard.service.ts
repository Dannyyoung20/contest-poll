import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private token: TokenService) { }

  canActivate() {
    if (this.token.isLoggedIn()) { return true; }

    this.router.navigateByUrl('/login');
    return false;
  }
}
