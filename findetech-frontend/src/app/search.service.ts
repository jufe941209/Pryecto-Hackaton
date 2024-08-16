import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() { }

  search(term: string): void {
    if (term.trim() !== '') {
      const elements = document.querySelectorAll('body *');
      elements.forEach((element: Element) => {
        if (element.textContent?.toLowerCase().includes(term.toLowerCase())) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight');
          setTimeout(() => {
            element.classList.remove('highlight');
          }, 2000);
        }
      });
    }
  }
}