import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import {CartService} from '../../services/cart.service'

import {RouterLinkWithHref,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// creamos una signal para realizar el evento de mostrar el carrito de compras
 hidesideMenu = signal(true); 
 private cartService = inject(CartService);
 cart= this.cartService.cart;
 total=this.cartService.total;

 tooglesideMenu(){
  this.hidesideMenu.update(prevstate => !prevstate );
  
 }


}
