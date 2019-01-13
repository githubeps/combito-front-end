import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
import { GrowlModule, DataTableModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { TableModule } from 'primeng/table';

// material
import { MatInputModule } from '@angular/material';
//import { MatTreeModule } from '@angular/material/tree';

//primeng
import { TreeModule } from 'primeng/tree';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    GrowlModule,
    DataTableModule,
    TableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    TreeModule
  ],
  declarations: [PerfilMainComponent, PerfilListComponent, PerfilEditComponent]
})
export class PerfilModule { }
