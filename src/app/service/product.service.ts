import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../type/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Url Of Cart Items
  CartProduct: any = 'http://localhost:3000/AddedInCart'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FAddedInCart';

  // Url Of All list Item
  AllProduct: any = 'http://localhost:3000/AllListedProduct'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FAllListedProduct'; 

  // Sneaker Url
  SneakerUrl: any = 'http://localhost:3000/Sneaker'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FSneaker';

  // Tshirt Url
  TshirtUrl: any = 'http://localhost:3000/Tshirt'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FSneaker'; //'http://localhost:3000/Tshirt';

  // Bags URL
  BagsUrl: any ='http://localhost:3000/Bag'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FBag' 

  // jacket url
  JacketUrl: any = 'http://localhost:3000/Jacket'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2FJacket';

  // Register User
  RegisterUrl: any = 'http://localhost:3000/register'; //'https://console.firebase.google.com/project/lifestyle-fashion/database/lifestyle-fashion-default-rtdb/data/~2Fregister';

  constructor(private http: HttpClient) { }

  // Add Product Into Cart Section
  addProduct(product: any) {
    return this.http.post(this.CartProduct, product);
  }

  // Remove from Cart
  RemoveProduct(product: any, id: any) {
    return this.http.delete(`${this.CartProduct}/${id}`);
  }

  // Get Item List
  GetList() {
    return this.http.get(this.AllProduct);
  }

  // sneaker
  GetSneaker() {
    return this.http.get(this.SneakerUrl);
  }

  // Get Tshirt
  GetTshirt() {
    return this.http.get(this.TshirtUrl);
  }

  // Get Sneaker
  GetBags() {
    return this.http.get(this.BagsUrl);
  }

  // Get Sneaker
  GetJacket() {
    return this.http.get(this.JacketUrl);
  }

  // Get Your Cart List
  GetCart() {
    return this.http.get(this.CartProduct);
  }

  // register did not used
  Register(value: any) {
    return this.http.post(this.RegisterUrl, value)
  }

  // Login
  // Login(){
  //   return this.http.get(this.RegisterUrl);
  // }
}
