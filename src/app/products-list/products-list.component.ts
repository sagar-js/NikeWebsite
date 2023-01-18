import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
// import { Product } from 'src/app/type/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // created a itemstorage
  products: any = [];

  home(){
    this.router.navigate(['Home']);
  };

  cart(){
    this.router.navigate(['Cart'])
  }
  constructor(private productservice: ProductService, private router:Router) { }

  // show all availabel product to client
  ngOnInit(): void {
  }

   // sneaker product
   Sneaker(){
    this.productservice.GetSneaker().subscribe((item)=>{
      this.products = item;
    })
  }

  // tshirt product
  Tshirt(){
    this.productservice.GetTshirt().subscribe((item)=>{
      this.products = item;
    })
  }

  // bags product
  Bags(){
    this.productservice.GetBags().subscribe((item)=>{
      this.products = item;
    })
  }

  // jacket product
  Jacket(){
    this.productservice.GetJacket().subscribe((item)=>{
      this.products = item;
    })
  }

  // other product
  Other(){
    this.productservice.GetList().subscribe((item) => {
      this.products = item;
    });
  }

  // add specific product into cart
  addProductToCart(product: any) {
    this.productservice.addProduct(product).subscribe();//items => cartitem.push(items) 
  }
}
