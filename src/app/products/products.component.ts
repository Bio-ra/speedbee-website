import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  private productDataService = inject(ProductDataService);
  private cdr = inject(ChangeDetectorRef);

  filters: string[] = [];
  activeFilter = 'Wszystkie';
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    console.log('ProductsComponent ngOnInit called');
    this.loading = true;
    console.log('About to call loadProducts');
    this.productDataService.loadProducts().then(() => {
      console.log('loadProducts promise resolved');
      this.allProducts = this.productDataService.getAllProducts();
      this.filters = this.productDataService.getUniqueTags();
      console.log('Loaded products:', this.allProducts);
      console.log('Filters:', this.filters);
      this.setFilter('Wszystkie');
      console.log('Setting loading to false');
      this.loading = false;
      this.cdr.markForCheck();
      console.log('loading is now:', this.loading);
    }).catch(err => {
      console.error('Failed to load products:', err);
      this.error = 'Nie udało się załadować produktów';
      this.loading = false;
    });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filteredProducts = this.productDataService.getProductsByTag(filter);
    console.log('Filtered products:', this.filteredProducts);
  }

  addToCart(event: Event, product: Product): void {
    event.stopPropagation();
    console.log('Added to cart:', product.name);
  }
}