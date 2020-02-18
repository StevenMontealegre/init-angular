import { NgModule } from '@angular/core';
// Módulo encargado de los condicionales en html
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

// Importación del modulo shared ya que home lo utiliza
import { SharedModule } from './../shared/shared.module';

@NgModule({

    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // Debe importarse el sistema de routing del módulo
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule {

}