 import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItem:Product[]=[];
  totalprice:number=0;

  constructor(private cartService: CartService){}
  ngOnInit(): void {
   this.cartService.getCartItems().subscribe(
    data=>{
      this.cartItem=data;
      this.totalprice=this.getTotalPrice();
    }
   )
  }
  getTotalPrice():number{
    for(let item of this.cartItem){
      this.totalprice+=item.price;
    }
    return this.totalprice;
  }
  clearCart():void{
    this.cartService.clearCart().subscribe();
  }
  checkOut():void{
    this.cartService.checkOut(this.cartItem).subscribe();
  }
}