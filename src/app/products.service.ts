import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: './assets/images/camiseta.png',
      title: 'Camiseta',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    },
    {
      id: '2',
      image: './assets/images/hoodie.png',
      title: 'Hoodie',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    },
    {
      id: '3',
      image: './assets/images/mug.png',
      title: 'Mug',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    },
    {
      id: '4',
      image: './assets/images/pin.png',
      title: 'Pin',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    },
    {
      id: '5',
      image: './assets/images/stickers1.png',
      title: 'Sticker 1',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    },
    {
      id: '6',
      image: './assets/images/stickers2.png',
      title: 'Sticker 2',
      price: 45000,
      description: 'Este es un producto de la tienda de James Steven Montealegre :)'
    }
  ];

  getProducts() {
    return this.products;
  }

  findProduct(id: string) {
    return this.products.find(item => id === item.id);
  }

  constructor() { }
}
