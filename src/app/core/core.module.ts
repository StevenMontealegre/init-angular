// Similar al shared, se diferencian por que sólo se agrupan componentes si se van a
// compartir generando una referencia única.

// Se utiliza para guardar servicios que tengan una sola referencia de los datos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // De esta manera queda en todo el core del proyecto cuando se importa en el 
  // appmodule
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
