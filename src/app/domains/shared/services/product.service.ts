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

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
