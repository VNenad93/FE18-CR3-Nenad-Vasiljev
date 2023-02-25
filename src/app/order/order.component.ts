import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { IProduct } from '../products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  newCart: Array<IProduct> = [];
  sum: number = 0;
  sumDiscount: number = 0;
  fee: number = 0;

  constructor(private cs: OrderService) {}

  ngOnInit(): void {
    this.newCart = this.cs.cart;
    this.sumUp();
  }

  addQtty(index: number): void {
    this.newCart.forEach((product, i) => {
      if (i === index) {
        product.qtty++;
        this.sumUp();
      }
    });
  }

  subQtty(index: number): void {
    this.newCart.forEach((product, i) => {
      if (i === index) {
        product.qtty--;
        this.sumUp();
        if (product.qtty === 0) {
          product.qtty = 1;
          this.newCart.splice(i, 1);
        }
      }
    });
  }

  removeFromCart(index: number) {
    this.newCart[index].qtty = 1;
    this.newCart.splice(index, 1);
    this.sumUp();
  }

  sumUp() {
    this.sum = 0;
    this.newCart.forEach((par) => {
      this.sum += par.price * par.qtty;
    });
    this.sum = parseFloat((this.sum * 1.1).toFixed(2));
    this.sumDiscount = parseFloat((this.sum * 0.85).toFixed(2));
  }
}
