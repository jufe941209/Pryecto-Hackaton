import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-yoga-principios',
  standalone: true,
  imports: [],
  templateUrl: './yoga-principios.component.html',
  styleUrl: './yoga-principios.component.css'
})
export class YogaPrincipiosComponent {
  constructor(private location: Location) {}

  closeFrame(): void {
    this.location.back();
  }
}
