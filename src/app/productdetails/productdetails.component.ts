import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productDataService = inject(ProductDataService);
  private cdr = inject(ChangeDetectorRef);

  product: Product | undefined;
  relatedProducts: Product[] = [];
  quantity = 1;

  ngOnInit(): void {
    this.productDataService.loadProducts().then(() => {
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        this.quantity = 1;

        this.product = this.productDataService.getProductById(id);
        console.log('Loaded product:', this.product);
        
        if (this.product) {
          this.relatedProducts = this.productDataService.getRelatedProducts(id);
          console.log('Related products:', this.relatedProducts);
          this.cdr.markForCheck();
        }
      });
    }).catch(err => {
      console.error('Failed to load products:', err);
    });
  }

  increaseQty(): void { 
    this.quantity++; 
  }

  decreaseQty(): void { 
    if (this.quantity > 1) this.quantity--; 
  }

  addToCart(): void {
    if (this.product) {
      console.log(`Added ${this.quantity}× ${this.product.name} to cart`);
    }
  }
}