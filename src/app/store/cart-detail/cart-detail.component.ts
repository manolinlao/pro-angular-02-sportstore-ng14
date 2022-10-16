import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
})
export class CartDetailComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit(): void {}
}
