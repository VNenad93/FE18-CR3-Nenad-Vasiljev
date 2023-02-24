import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { IProduct, products } from '../products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  
  products: Array<IProduct> = products;

  constructor(private cs: OrderService) {}

  addToCart(par: IProduct) {
    this.cs.addToCart(par)
    alert('Added to the Cart')
  }
  
}
