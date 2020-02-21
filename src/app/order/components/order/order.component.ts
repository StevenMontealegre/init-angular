import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { MaterialModule } from './../../../material/material.module';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(
    private cartService: CartService
  ) {
    // Escucha continua de los productos que se están agregando al carrito
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
