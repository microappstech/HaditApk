import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './hadits/tab2.page';
import { Tab1Page } from './home/tab1.page';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // component: Tab1Page,
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'hadites/:id',
    loadChildren: () => import('./hadits/tab2.module').then( m => m.Tab2PageModule)
  },
  {
  path: 'favorites',
    component: FavoritesComponent
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
