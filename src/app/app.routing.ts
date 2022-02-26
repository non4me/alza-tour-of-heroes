import { RouterModule, Routes } from '@angular/router';

import { MainRoutes } from '_models/main-routers.enum';

import { DashboardComponent } from './business-flow/dashboard/dashboard.component';


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
