import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaMainComponent } from './mapa-main/mapa-main.component';

const routes: Routes = [{
  path :'',component : MapaMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class moduloMapaRoutingModule { }
