import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: Array<IProduct> = [];

  constructor() {}

  addToCart(product: IProduct) {
    const existingProduct = this.cart.find((p) => p.name === product.name);
    if (existingProduct) {
      existingProduct.qtty++;
      console.log(existingProduct.qtty);
    } else {
      this.cart.push(product);
    }
  }

  getCart() {
    return this.cart;
  }
}
