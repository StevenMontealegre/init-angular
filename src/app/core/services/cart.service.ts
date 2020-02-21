import { Injectable } from '@angular/core';
// Inyecta principios reactivos
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  // Control de flujo de datos
  private cart = new BehaviorSubject<Product[]>([]);

  // Variable de tipo Observable, quien se subscriba tendrá sus
  // cambios en tiempo real
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    // Se crea una nueva referencia del arreglo, un nuevo estado
    // un nuevo objeto en el carro de la tienda
    this.products = [...this.products, product];
    // Notificación a todos los subscritos de que se agregó algo al carrito
    this.cart.next(this.products);
  }
}
