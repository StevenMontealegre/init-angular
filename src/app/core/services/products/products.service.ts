// Servicio encargado de contener los productos y exponerlos

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    // La URl resuelve un arreglo de productos
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    // La URl resuelve un producto
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
