import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


// inyeccion de dependencias:
private http = inject(HttpClient); // nos permite conectarnos ao enviar un request y obtener y procesar la informacion


  constructor() { }

  getAll(){
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
