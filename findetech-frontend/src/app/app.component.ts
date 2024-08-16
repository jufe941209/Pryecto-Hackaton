import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encuesta1Component } from './components/encuesta1/encuesta1.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Encuesta1Component,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    RouterOutlet,
    CarouselModule,
   

],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Findetech-Hackaton';
}
