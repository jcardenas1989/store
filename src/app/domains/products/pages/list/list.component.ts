import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';

import {RouterLinkWithHref} from '@angular/router';
import {ProductComponent} from '@products/components/product/product.component';
import {HeaderComponent} from '@shared/components/header/header.component';
import {Product} from '@shared/models/product.model';
import {CartService} from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

products= signal<Product[]>([]);
categories= signal<Category[]>([]);
@Input() category_id?: string;
// generamos la inyeccion de servicios
private cartService = inject(CartService);
private productService = inject(ProductService);
private categoryService = inject(CategoryService);


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.getCategories();
}

// ngOnchange se ejecuta una vez, o cada vez que cambia el input
ngOnChanges(changes: SimpleChanges) {  
  this.getProducts();

}

private getProducts(){
  this.productService.getProducts(this.category_id)
  .subscribe({
    next: (products)=> {
       this.products.set(products);
    },
    error:()=>{

    }
  })
}

private getCategories(){
  this.categoryService.getAll().subscribe({
    next: (data)=> {
       this.categories.set(data);
    },
    error:()=>{

    }
  })
}


addToCart(product: Product){
  
  this.cartService.addToCart(product);
}
  
}
