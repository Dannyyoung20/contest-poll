import { TokenService } from './../../services/token/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cp_navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private auth: AuthService,
              private router: Router,
              private token: TokenService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.removeToken();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
