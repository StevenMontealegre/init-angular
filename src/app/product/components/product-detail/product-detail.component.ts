import { Component, OnInit } from '@angular/core';
// Inyección de datos, de dependencia y de tipado
import { ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    // Las dependencias se ubican aquí
    // Es una instancia de clase en java
    private route: ActivatedRoute,
    // (*)
    private productsService: ProductsService

  ) { }

  ngOnInit(): void {
    // Aquí va el código de manera adecuada para recibir datos
    // Quiero los parámetros de la ruta y me voy a suscribir para escuchar los cambios
    // En conclusión se obtiene el id de la ruta (ruta/id)
    this.route.params.subscribe((params: Params) => {
      // Se obtiene un objeto json solo se requiere el id en este caso
    const id = params.id;

      // Obtener el producto ya que se tiene la instancia (*) del servicio que contiene
      // ese método const product no está dentro del dominio del template
      // this.product = this.productsService.findProduct(id);
    this.fetchProduct(id);

    });

  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });

  }

  createProduct() {
    const newProduct: Product = {
      id: '777',
      title: 'Nuevo desde Angular',
      image: 'assets/images/banner-3.jpg',
      price: 9000,
      description: 'hermosa camisa'

    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '44s4dfdf444',
      title: 'Actualizado desde Angular',
      image: 'assets/images/banner-2.jpg',
      price: 119000,
      description: 'hermoso objeto'

    };
    this.productsService.updateProduct('6', updateProduct)
    .subscribe(product => {
      console.log(product);
    });

  }

  deleteProduct() {
    this.productsService.deleteProduct('6')
    .subscribe(rta => {
      console.log(rta);
    });

  }



}
