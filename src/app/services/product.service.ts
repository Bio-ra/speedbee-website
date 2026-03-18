import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private http = inject(HttpClient);

  // Swap this one line when your real API is ready:
  // private apiUrl = 'https://api.yourdomain.com/products';
  private apiUrl = 'data/products.json';

  // Fetch once, cache for the session
  private products$ = this.http.get<Product[]>(this.apiUrl).pipe(shareReplay(1));

  getAll(): Observable<Product[]> {
    return this.products$;
  }

  getById(id: number): Observable<Product | undefined> {
    return this.products$.pipe(
      map(products => products.find(p => p.id === id))
    );
  }

  getCategories(): Observable<string[]> {
    return this.products$.pipe(
      map(products => {
        const tags = new Set<string>();
        tags.add('Wszystkie');
        products.forEach(p => {
          if (p.tag) {
            tags.add(p.tag);
          }
        });
        return Array.from(tags).sort();
      })
    );
  }

  getRelated(product: Product, limit = 4): Observable<Product[]> {
    return this.products$.pipe(
      map(products => {
        return products.filter(p => p.id !== product.id).slice(0, limit);
      })
    );
  }
}