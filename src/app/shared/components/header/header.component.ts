import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
// Componente que escucha dinamicamente (observable)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;

  constructor(
    private cartService: CartService
  ) {
    // Escucha los cambios del observable
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    });
  }

  ngOnInit(): void {
  }

}
