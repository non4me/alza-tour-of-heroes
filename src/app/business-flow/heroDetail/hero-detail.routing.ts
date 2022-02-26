import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail.component';


export const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
  }
];

export const routing = RouterModule.forChild(routes);
