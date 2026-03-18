import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductDataService } from '../../../services/product-data.service';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  private productDataService = inject(ProductDataService);
  private cdr = inject(ChangeDetectorRef);

  filters: string[] = [];
  activeFilter = 'Wszystkie';
  products: Product[] = [];

  ngOnInit(): void {
    this.productDataService.loadProducts().then(() => {
      this.products = this.productDataService.getAllProducts();
      this.filters = this.productDataService.getUniqueTags();
      this.cdr.markForCheck();
    }).catch(err => {
      console.error('Failed to load products:', err);
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  getFilteredProducts(): Product[] {
    if (this.activeFilter === 'Wszystkie') {
      return this.products;
    }
    return this.products.filter(p => p.tag === this.activeFilter);
  }

  addToCart(event: Event, product: Product) {
    event.stopPropagation();
    console.log('Dodano do koszyka:', product);
    // Implement cart logic here
  }
}
