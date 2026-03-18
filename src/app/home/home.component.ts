import { Component } from '@angular/core';
import { Herocomponent } from './components/herocomponent';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { ValuesSectionComponent } from './components/values-section/values-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { CTASectionComponent } from './components/cta-section/cta-section.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    Herocomponent,
    BenefitsSectionComponent,
    ProductsSectionComponent,
    ValuesSectionComponent,
    TestimonialsSectionComponent,
    AboutSectionComponent,
    CTASectionComponent,
  ],
  templateUrl: 'home.component.html'
})
export class HomeComponent {}