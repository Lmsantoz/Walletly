import { Routes } from '@angular/router';
import { Auth } from './components/auth/auth';

export const routes: Routes = [
    //rota para paginda de login 
    {path: "", redirectTo: "auth", pathMatch: "full",},
    {path: "auth", component: Auth,},
    {path: "**", component: Auth},

];
