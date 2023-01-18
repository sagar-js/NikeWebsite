import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './product/cart/cart.component';
import { HomeComponent } from './product/home/home.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
