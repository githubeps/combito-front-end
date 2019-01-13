import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuMainComponent } from './menu-main/menu-main.component';

const routes: Routes = [
  {
    path : '', component : MenuMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
