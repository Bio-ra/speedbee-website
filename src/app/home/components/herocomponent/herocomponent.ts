import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-herocomponent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './herocomponent.html',
  styleUrl: './herocomponent.css',
})
export class Herocomponent {}
