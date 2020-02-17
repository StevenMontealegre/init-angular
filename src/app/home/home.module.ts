import { NgModule } from '@angular/core';
// Módulo encargado de la lógica en html
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({

    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // Debe importarse el sistema de routing del módulo
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule {

}