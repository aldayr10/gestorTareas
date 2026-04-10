import { Routes } from '@angular/router';
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { GestorTareas } from "./pages/gestor-tareas/gestor-tareas";


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login, },
    { path: 'register', component: Register, },
    { path: 'gestor-tareas', component: GestorTareas, },
];
