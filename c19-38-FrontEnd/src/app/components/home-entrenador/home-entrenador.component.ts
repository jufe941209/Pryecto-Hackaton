import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-entrenador',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './home-entrenador.component.html',
  styleUrl: './home-entrenador.component.css'
})
export class HomeEntrenadorComponent {

}
