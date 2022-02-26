import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './components/hero-list/hero-list.component';


export const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
  }
];

export const routing = RouterModule.forChild(routes);
