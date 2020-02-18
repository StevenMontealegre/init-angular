import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

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
        // canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      // {
        // Necesita diferenciarse de products por lo cual se realiza
        // una ruta compuesta.
      //   path: 'products/:id',
      //  component: ProductDetailComponent
      // }
      {
        path: 'contact',
        canActivate: [AdminGuard],
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
