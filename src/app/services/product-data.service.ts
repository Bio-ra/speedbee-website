import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private http = inject(HttpClient);
  private products: Product[] = [];
  private isLoaded = false;
  private loadPromise: Promise<void> | null = null;

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByTag(tag: string): Product[] {
    console.log(`Getting products for tag: "${tag}", total products: ${this.products.length}`);
    if (tag === 'Wszystkie') {
      console.log('Returning all products:', this.products);
      return this.products;
    }
    const filtered = this.products.filter(p => p.tag === tag);
    console.log(`Filtered ${tag}:`, filtered);
    return filtered;
  }

  getRelatedProducts(productId: number, limit: number = 3): Product[] {
    return this.products.filter(p => p.id !== productId).slice(0, limit);
  }

  getUniqueTags(): string[] {
    const tags = new Set<string>();
    tags.add('Wszystkie');
    this.products.forEach(p => {
      if (p.tag) {
        tags.add(p.tag);
      }
    });
    const result = Array.from(tags);
    console.log('Unique tags:', result);
    return result;
  }

  async loadProducts(): Promise<void> {
    // Return existing promise if already loading
    if (this.loadPromise) {
      return this.loadPromise;
    }

    // Return immediately if already loaded
    if (this.isLoaded) {
      return Promise.resolve();
    }

    this.loadPromise = new Promise((resolve, reject) => {
      this.http.get<Product[]>('./data/products.json', {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }).subscribe({
        next: (data) => {
          console.log('Products loaded:', data);
          this.products = data || [];
          this.isLoaded = true;
          this.loadPromise = null;
          resolve();
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.isLoaded = true;
          this.loadPromise = null;
          reject(error);
        }
      });
    });

    return this.loadPromise;
  }
}
