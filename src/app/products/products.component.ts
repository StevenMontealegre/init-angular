import { Component, OnInit } from '@angular/core';
// Importamos la interface
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Tipado asociar a la creación de objetos con la interface
  // product.model.ts
  products: Product[] = [
    {
      id: '1',
    image: './assets/images/camiseta.png',
    title: 'Camiseta',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    },
    {
      id: '2',
    image: './assets/images/hoodie.png',
    title: 'Hoodie',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    },
    {
      id: '3',
    image: './assets/images/mug.png',
    title: 'Mug',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    },
    {
      id: '4',
    image: './assets/images/pin.png',
    title: 'Pin',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    },
    {
      id: '5',
    image: './assets/images/stickers1.png',
    title: 'Sticker 1',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    },
    {
      id: '6',
    image: './assets/images/stickers2.png',
    title: 'Sticker 2',
    price: 45000,
    description: 'Este es un producto de la tienda do se'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
