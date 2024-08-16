import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encuesta1Component } from './components/encuesta1/encuesta1.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

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
    ReactiveFormsModule,
    RecaptchaV3Module,

],
providers: [
  { provide: RECAPTCHA_V3_SITE_KEY, useValue: 'YOUR_SITE_KEY' } // Aquí se agrega la clave del sitio
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Findetech-Hackaton';
}
