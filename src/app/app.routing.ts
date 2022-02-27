import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './business-flow/dashboard/dashboard.component';
import { MainRoutes } from './models/main-routers.enum';


export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MainRoutes.DASHBOARD
  },
  {
    path: MainRoutes.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: MainRoutes.LIST,
    loadChildren: () => import('./business-flow/heroList/hero-list.module').then(m => m.HeroListModule)
  },
  {
    path: `${MainRoutes.DETAIL}/:heroId`,
    loadChildren: () => import('./business-flow/heroDetail/hero-detail.module').then(m => m.HeroDetailModule)
  },
  {
    path: '**',
    redirectTo: 'MainRoutes.DASHBOARD'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
