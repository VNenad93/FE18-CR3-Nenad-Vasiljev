import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../order.service';
import { products, IProduct } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: IProduct = {} as IProduct;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cs: OrderService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id']

      this.product = products[this.id]
    })
  }

  addToCart(par: IProduct) {
    this.cs.addToCart(par)
    alert('added to the cart')
  }
}
