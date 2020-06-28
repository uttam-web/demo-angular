import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyloadComponent } from './lazyload.component';
import { LazyloadC1Component } from './lazyload-c1/lazyload-c1.component';
import { LazyloadC2Component } from './lazyload-c2/lazyload-c2.component';

const routes: Routes = [
  { path:'', component: LazyloadComponent },
  { path:'c1', component:LazyloadC1Component },
  { path:'c2', component:LazyloadC2Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
