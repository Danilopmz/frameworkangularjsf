import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //COMPONENTE H
    LoginComponent, //COMPONENTE L
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Modulohttpcliente (POST, GET , DEL )
    FormsModule, 
    routing //CONST ROUTING DO APP.ROUTING.TS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
