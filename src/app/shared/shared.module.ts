import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainNavigationComponent } from './components/master-page/main-navigation/main-navigation.component';
import { NameLengthLimitDirective } from './directives/name-length-limit.directive';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { DataProviderService } from './services/data-provider.service';


@NgModule({
  declarations: [
    NameLengthLimitDirective,
    MasterPageComponent,
    MainNavigationComponent
  ],
  exports: [
    NameLengthLimitDirective,
    MasterPageComponent
  ],
  providers: [
    DataProviderService
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
