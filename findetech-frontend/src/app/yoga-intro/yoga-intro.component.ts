import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-yoga-intro',
  standalone: true,
  imports: [],
  templateUrl: './yoga-intro.component.html',
  styleUrl: './yoga-intro.component.css'
})
export class YogaIntroComponent {
  constructor(private location: Location) {}

  closeFrame(): void {
    this.location.back();
  }
}


