import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';

import { SharedModule } from '_shared/shared.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './business-flow/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
