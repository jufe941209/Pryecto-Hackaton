import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselModule, CarouselComponent } from 'ngx-owl-carousel-o'; // Asegúrate de importar el módulo y el componente
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SearchService } from '../../search.service';


@Component({

  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CarouselModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('autoHeight', [
      state('open', style({
        height: '*'
      })),
      state('closed', style({
        height: '0'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement', { static: false }) owlElement!: CarouselComponent;

  carouselItems = [
    { image: 'assets/carousel-1.jpg', link: 'https://www.youtube.com/watch?v=video1' },
    { image: 'assets/carousel-2.jpg', link: '/pagina1' },
    { image: 'assets/carousel-3.jpg', link: '/pagina2' }
  ];

  searchTerm: string = ''; // Variable para almacenar el término de búsqueda

  constructor(private searchService: SearchService) {}

  ngOnInit(): void { }

  navigateTo(link: string): void {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      // Aquí puedes utilizar el router de Angular para navegar internamente
      // por ejemplo: this.router.navigate([link]);
    }
  }

  prev() {
    if (this.owlElement) {
      this.owlElement.prev();
    }
  }

  next() {
    if (this.owlElement) {
      this.owlElement.next();
    }
  }

  search(): void {
    if (this.searchTerm.trim() !== '') {
      const elements = document.querySelectorAll('body *');
      let found = false;

      elements.forEach((element: Element) => {
        if (element.textContent?.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          found = true;
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight');
          setTimeout(() => {
            element.classList.remove('highlight');
          }, 2000);
        }
      });

      if (!found) {
        alert('No se encontraron coincidencias.');
      }
    }
  }
}