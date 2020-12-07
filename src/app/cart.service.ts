import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { products } from "./products";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  //添加商品到购物车
  addToCart(product) {
    this.items.push(product);
  }

  //返回购物车商品
  getItems() {
    return this.items;
  }

  //清除购物车商品
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) {}
}
