import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PromiseObservableComponent } from './component/promise-observable/promise-observable.component';


const routes: Routes = [

  {path:'home',component: HomeComponent},

  {path:'',component: HomeComponent},

  {path:'lazyload',loadChildren:()=> import
  ('../../src/app/lazyload/lazyload.module').then(m=>m.LazyloadModule)},

  {path:'promise-observable',component: PromiseObservableComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
