import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './values-section.component.html',
  styleUrls: ['./values-section.component.css']
})
export class ValuesSectionComponent {
  values: Value[] = [
    {
      icon: '🌲',
      title: 'Naturalnosc',
      description: 'Bez dodatkow chemicznych'
    },
    {
      icon: '👥',
      title: 'Tradycja',
      description: 'Rodzinna pasieka od pokolen'
    },
    {
      icon: '♻️',
      title: 'Ekologia',
      description: 'Zrownowazone pszczelarstwo'
    },
    {
      icon: '📍',
      title: 'Lokalnosc',
      description: 'Miod z polskiej wsi'
    },
    {
      icon: '✨',
      title: 'Jakosc',
      description: 'Reczne pozyskiwanie'
    },
    {
      icon: '🤝',
      title: 'Troska',
      description: 'Dbalosc o pszczoly'
    }
  ];
}
