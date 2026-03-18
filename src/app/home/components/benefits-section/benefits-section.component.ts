import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.css']
})
export class BenefitsSectionComponent {
  benefits: Benefit[] = [
    {
      icon: '❤️',
      title: 'Zdrowie',
      description: 'Wspiera układ odpornościowy i dodaje energii każdego dnia'
    },
    {
      icon: '🌿',
      title: 'Naturalny',
      description: 'Bez dodatków chemicznych, konserwantów czy sztucznych substancji'
    },
    {
      icon: '🛡️',
      title: 'Odporność',
      description: 'Bogaty w antyoksydanty i naturalne składniki wspierające odporność'
    },
    {
      icon: '☀️',
      title: 'Energia',
      description: 'Naturalny zastrzyk energii dzięki zdrowym cukrom prostym'
    },
    {
      icon: '💧',
      title: 'Czystość',
      description: 'Zbierany z dala od zanieczyszczeń, w sercu wiejskiej natury'
    },
    {
      icon: '🏆',
      title: 'Jakość',
      description: 'Najwyższa jakość potwierdzona przez zadowolonych klientów'
    }
  ];
}
