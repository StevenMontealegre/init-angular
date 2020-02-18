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
      this.product = this.productsService.findProduct(id);

    });

  }

}
