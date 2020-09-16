import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NotfoundPageComponent } from './shared/pages/notfound-page/notfound-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomePageComponent }]
  },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
