import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { moduloMapaRoutingModule } from './modulo-mapa-routing.module';
import { MapaMainComponent } from './mapa-main/mapa-main.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    moduloMapaRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,
    FlexLayoutModule
  ],
  declarations: [MapaMainComponent]
})
export class moduloMapaModule { }
