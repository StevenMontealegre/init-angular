import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  product: Product;
  // (*)
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  // Obtención de un producto por su id
  getProduct(id: string) {
    return this.productsService.getProduct(id).subscribe(product => {
      this.product = product;

    });
  }
  // Elimnación de ese producto obtenido
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta);
      // Actualización de la página
      this.getProducts();
    })

  }
  updateProduct() {

  }
}
