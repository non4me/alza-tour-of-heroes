import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailComponent } from './components/hero-detail.component';
import { routing } from './hero-detail.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    routing,
    ReactiveFormsModule

  ]
})
export class HeroDetailModule {
}
