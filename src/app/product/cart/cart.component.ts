import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // payment
  paymentHandler: any = null;
  // cartList
  product: any = [];

  // goto
  home() {
    this.router.navigate(['Home']);
  };

  // goto
  shop() {
    this.router.navigate(['ProductList']);
  }

  // constructor
  constructor(private productservice: ProductService, private router: Router) { }

  // runing component
  ngOnInit(): void {
    // payment gateway
    this.invokeStripe();

    // import product list from cart
    this.productservice.GetCart().subscribe((item: any) => {
      this.product = item;
    });
  }

  // delete from cart
  RemoveFromCart(product: any, id: any) {
    this.productservice.RemoveProduct(product, id).subscribe(() => {
      this.ngOnInit();
    });
  }

  // make payment
  makePayment(amount:any){
    const  paymentHandler = (<any>window).StripeCheckout.configure({
      key:'pk_test_51H7bbSE2RcKvfXD4DZhu',
      local:'auto',
      token: function(stripeToken:any){
        console.log(stripeToken);
        // alert('Stripe Token generated!');
      },
    });

    paymentHandler.open({
      name:'Positronx',
      description:'3 widgets',
      amount:amount * 100,
    });
  }

  invokeStripe(){
    if(!window.document.getElementById('stripe-script')){
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src ='https://checkout.stripe.com/checkout.js';
      script.onload = () =>{
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
        },
      });
      };
      window.document.body.appendChild(script);
    }
  }
}
