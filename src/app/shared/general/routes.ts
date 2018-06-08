import { Routes } from '@angular/router';

import { HomeComponent } from '../../children/home/home.component';
import { LoginComponent } from '../../children/login/login.component';
import { SignupComponent } from '../../children/signup/signup.component';
import { AuthGuard } from './../guards/auth/auth-guard.service';

export const routes: Routes =  [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthGuard]
    }
];
