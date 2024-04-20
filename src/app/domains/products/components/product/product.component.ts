import { Component,EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //atributos enviados desde el componente padre list.component.html al hijo product.component
  @Input({required:true}) img: string ='';
  @Input({required:true}) price: number = 0;
  @Input({required:true}) tittle: string ='';

  //atributos que envia el hijo product.component  al padre list.component
  @Output() addToCart = new EventEmitter();


  addToCartHandled(){
    console.log('estamos desde el componente  hijo');
    this.addToCart.emit('Hola, este es un mensaje desde componente hijo y al compoennte padre: +'+ this.tittle);
  }
}
