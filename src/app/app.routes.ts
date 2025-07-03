import { Routes } from '@angular/router';
import { Login } from './login/login';
import{ Register } from './register/register';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: Login, pathMatch: "full"},
    {path: 'register', component: Register}
];
