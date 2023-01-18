import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductService } from '../service/product.service';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MaterialModule
  ],
  exports:[ ProductsListRoutingModule]
})
export class ProductsListModule { }
