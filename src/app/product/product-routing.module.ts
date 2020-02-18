import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]

})
export class  ProductRoutingModule {
    constructor() {
    }
}
