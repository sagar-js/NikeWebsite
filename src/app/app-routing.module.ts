import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './product/cart/cart.component';
import { HomeComponent } from './product/home/home.component';
// import { ListComponent } from './product/list/list.component';
// import { LoginComponent } from './product/login/login.component';
// import { SignUpComponent } from './product/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Cart',component:CartComponent},
  {path:'Home',component:HomeComponent},
  { path: 'ProductList', loadChildren: () => import('./products-list/products-list.module').then(m => m.ProductsListModule) },
  // { path: 'Videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
