import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';


const routes: Routes = [
  {
    path : '', component : PerfilMainComponent,

    children : [
      {
        path : '', redirectTo : 'lista'
      },
      {
        path : 'lista', component : PerfilListComponent,
        children : [
          {
            path : 'edicion' , component : PerfilEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
