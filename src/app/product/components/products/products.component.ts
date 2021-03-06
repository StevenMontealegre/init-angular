import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Importamos la interface
import { Product } from './../../../product.model';
// Servicio Observable
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Tipado asociar a la creación de objetos con la interface
  // product.model.ts

  @Input() product: Product;
  // Debe inicializarse el EventEmitter
  @Output() AddItemEvent: EventEmitter <any> = new EventEmitter();

  // Método que transmite al componente padre datos del producto
  addItemMethod() {
    console.log('Producto añadido');
    // Así se realiza la transferencia de información con el método emit
    // En este caso se está "transmitiendo" el id del producto
    // this.AddItemEvent.emit(this.product.id);

    // Agrega productos al carro.
    this.cartService.addCart(this.product);
  }
  constructor(
    // inyección de dependencia, es decir se van a hacer uso de las variables
    // y métodos de ese componente
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
