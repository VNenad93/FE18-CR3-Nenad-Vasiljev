import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: Array<IProduct> = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}
