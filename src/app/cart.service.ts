import { Injectable } from "@angular/core";
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
  clearCarts() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
