// Servicio encargado de contener los productos y exponerlos

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

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
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string) {
    // La URl resuelve un producto
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url_api, product);

  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}${id}`);
  }
}
