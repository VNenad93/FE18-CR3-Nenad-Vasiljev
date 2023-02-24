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
  sum: any = 0

  constructor(private cs: OrderService) {}

  ngOnInit(): void {
    this.newCart = this.cs.cart;
    this.newCart.forEach(par => {
      this.sum += par.price
    })

    console.log(this.sum)
  }
}
