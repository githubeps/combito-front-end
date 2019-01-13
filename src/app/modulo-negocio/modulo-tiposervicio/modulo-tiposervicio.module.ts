import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloTiposervicioRoutingModule } from './modulo-tiposervicio-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatTableModule, MatSelectModule } from '@angular/material';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    ModuloTiposervicioRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    ComponentesModule ,   
    HttpClientModule

  ],
  declarations: []
})
export class ModuloTiposervicioModule { }
