import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductComponent[] = [];

  constructor() { }
  addToCart(product: ProductComponent) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
