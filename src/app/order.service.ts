import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: Array<IProduct> = [];
  sum: number = 0;

  constructor() {}

  addToCart(product: IProduct) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  getSum(par: number) {
    this.sum += par
  }
}
