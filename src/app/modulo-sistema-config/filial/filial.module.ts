import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilialRoutingModule } from './filial-routing.module';
import { FilialMainComponent } from './filial-main/filial-main.component';
import { FilialListComponent } from './filial-list/filial-list.component';
import { FilialEditComponent } from './filial-edit/filial-edit.component';
import { GrowlModule, DataTableModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FilialRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FilialMainComponent, FilialListComponent, FilialEditComponent]
})
export class FilialModule { }
