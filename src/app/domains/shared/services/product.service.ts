import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // inyeccion de dependencias:
  private http = inject(HttpClient); // nos permite conectarnos ao enviar un request y obtener y procesar la informacion

  constructor() { }

  getProducts(category_id?: string){
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    
    if(category_id){
      url.searchParams.set('categoryId',category_id);
    }
    
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
