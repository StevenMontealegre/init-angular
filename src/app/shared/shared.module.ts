// Aquí van todos los elementos que son compartidos en nuestra aplicación.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Para no alterar la navegación se requiere importar el router module
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { MaterialModule } from './../material/material.module';

@NgModule({
  // Para que puedan ser utilizados
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective

  ],
  // Cuales son permitidos para la utilización en otros componentes o módulos.
  exports: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
