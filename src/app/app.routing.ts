import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
const APP_ROUTERS: Routes = [ //app routers do tipo routers
    {
        path: 'home', component: HomeComponent //rota componente home
    },
    {
        path: 'login', component: LoginComponent //rota componente login 
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS); //ModuloRouter 