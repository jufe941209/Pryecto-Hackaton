import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-deportista',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './home-deportista.component.html',
  styleUrl: './home-deportista.component.css'
})
export class HomeDeportistaComponent {
  title = 'tu-app';

  // Variables para manejar el estado de visibilidad de las tarjetas
  visibleCard: string | null = null;

  seleccionarCategoria(categoria: string) {
    const categorias = ['yoga', 'peso', 'cardio', 'resistencia', 'fuerza', 'estiramiento', 'nutricion'];

    // Ocultar todos los contenidos
    categorias.forEach(cat => {
        const contenido = document.querySelector(`.contenido-${cat}`) as HTMLElement;
        if (contenido) {
            contenido.classList.add('hidden');
            contenido.classList.remove('contenido-activo');
        }
    });

    // Mostrar el contenido seleccionado
    const contenidoSeleccionado = document.querySelector(`.contenido-${categoria}`) as HTMLElement;
    if (contenidoSeleccionado) {
        contenidoSeleccionado.classList.remove('hidden');
        contenidoSeleccionado.classList.add('contenido-activo');
    }

    // Deseleccionar todos los ítems de la barra deslizante
    const slideItems = document.querySelectorAll('.slide-item') as NodeListOf<HTMLElement>;
    slideItems.forEach(item => {
        item.classList.remove('selected');
    });

    // Seleccionar el ítem correspondiente
    const slideSeleccionado = document.querySelector(`.slide-item img[alt="${categoria.charAt(0).toUpperCase() + categoria.slice(1)}"]`)?.parentElement;
    console.log(`Seleccionado: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`, slideSeleccionado); // Agrega este console.log
    if (slideSeleccionado) {
        slideSeleccionado.classList.add('selected');
    }
}


  toggleCard(event: Event) {
    const target = event.target as HTMLElement;
    const cardContainer = target.closest('.card-container');
    if (cardContainer) {
      const cardId = cardContainer.querySelector('h1')?.textContent || '';
      this.visibleCard = this.visibleCard === cardId ? null : cardId;
      const allCards = document.querySelectorAll('.card-container');
      allCards.forEach(card => {
        card.classList.toggle('hidden', !this.visibleCard || card.querySelector('h1')?.textContent !== this.visibleCard);
      });
    }
  }
}