import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {

  }

    fetchProducts() {
      this.productsService.getProducts().subscribe(products => {
        this.products = products;
      });
    }

    AddItemComponent(indice: number) {
      console.log('product');
      console.log(indice);
    }

    ngOnInit() {
      // Peticiones hacia datos
      this.fetchProducts();
    }
  }
