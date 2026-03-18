import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Anna Kowalska',
      location: 'Warszawa',
      text: 'Najlepszy miód jaki kiedykolwiek jadłam! Czuć różnicę w porównaniu do sklepowego. Moja cała rodzina jest zachwycona.',
      rating: 5
    },
    {
      name: 'Piotr Nowak',
      location: 'Kraków',
      text: 'Zamawiam regularnie od dwóch lat. Miód lipowy to mój ulubiony - idealny do herbaty i na przeziębienia.',
      rating: 5
    },
    {
      name: 'Magdalena Wiśniewska',
      location: 'Gdańsk',
      text: 'Szybka dostawa, pięknie zapakowane słoiki. Kupiłam jako prezent i każdy był zachwycony jakością.',
      rating: 5
    }
  ];

  generateInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
