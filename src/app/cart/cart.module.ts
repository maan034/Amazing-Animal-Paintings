import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CartModule { }
