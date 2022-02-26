import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { routing } from './hero-list.routing';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroListItemComponent } from './components/hero-list/hero-list-item/hero-list-item.component';
import { SharedModule } from '_shared/shared.module';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroListItemComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class HeroListModule { }
