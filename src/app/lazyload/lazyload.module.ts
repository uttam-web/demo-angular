import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadComponent } from './lazyload.component';
import { DemoMaterialModule } from '../material-module';

import { LazyloadC1Component } from './lazyload-c1/lazyload-c1.component';
import { LazyloadC2Component } from './lazyload-c2/lazyload-c2.component';


@NgModule({
  declarations: [LazyloadComponent,LazyloadC1Component,LazyloadC2Component],
  imports: [
    CommonModule,
    LazyloadRoutingModule,
    DemoMaterialModule
  ]
})
export class LazyloadModule { }
