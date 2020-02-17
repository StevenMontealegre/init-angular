import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

// Las rutas son objetos
const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    // Dependencia de los demás componentes, en este caso layout renderiza
    // no solo su componente sino los otros también
    children: [
      {
        // cuando la url no está compuesta redirecciona al home
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        // Ya no carga un componente sino un módulo
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        // Necesita diferenciarse de products por lo cual se realiza
        // una ruta compuesta.
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },

    ]

  },
  {
    path: '**',
    component: PageNotFoundComponent

  }
];

@NgModule({
  // PreloadAllModules estrategia de carga, debe importarse en las rutas
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
