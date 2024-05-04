import { Component,EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import {RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe,TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //atributos enviados desde el componente padre list.component.html al hijo product.component
  @Input({required:true}) product!: Product;


  //atributos que envia el hijo product.component  al padre list.component
  @Output() addToCart = new EventEmitter();


  addToCartHandled(){
    console.log('estamos desde el componente  hijo');
    this.addToCart.emit(this.product);
  }
}
