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
  sum: any = 0;

  constructor(private cs: OrderService) {}

  ngOnInit(): void {
    this.newCart = this.cs.cart;
    this.sumUp()
  }

  addQtty(index: number): void {
    this.newCart.forEach((product, i) => {
      if (i === index) {
        product.qtty++;
        this.sumUp()
      }
    });
  }

  subQtty(index: number): void {
    this.newCart.forEach((product, i) => {
      if (i === index) {
        product.qtty--;
        this.removeFromCart(index)
        this.sumUp()
      }
    });
  }

  removeFromCart(index: number) {
    if(this.newCart[index].qtty == 0) {
      this.newCart.splice(index, 1)
      this.newCart[index].qtty == 1
    }
  }

  sumUp() {
    this.sum = 0;
    this.newCart.forEach((par) => {
      this.sum += par.price * par.qtty;
      console.log(this.sum)
    }); 
  }
}
