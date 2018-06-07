import { HomeComponent } from '../../children/home/home.component';
import { LoginComponent } from '../../children/login/login.component';

export const routes =  [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];