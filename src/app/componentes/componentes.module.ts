import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatProgressBarModule, MatProgressBar } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FechaMatComponent } from './fecha-mat/fecha-mat.component';
import { MatInputModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from '../shared/validators/MomentDateAdapter';

import { PaginatorModule } from 'primeng/paginator';
import { TipoDeServicioComponent } from './tipo-de-servicio/tipo-de-servicio.component';
import { SharedModule } from '../shared/shared.module';
import { CondicionConexionAguaComponent } from './condicion-conexion-agua/condicion-conexion-agua.component';
import { TipoPropiedadComponent } from './tipo-propiedad/tipo-propiedad.component';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    PaginatorModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    SharedModule

  ],
  providers : [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter }
  ],

  declarations: [
    FechaMatComponent,
    TipoDeServicioComponent,
    CondicionConexionAguaComponent,
    TipoPropiedadComponent,
    CategoriaComponent,


  ],
  exports: [
    MatDatepickerModule,
    FechaMatComponent,
    TipoDeServicioComponent,
    CondicionConexionAguaComponent,
    TipoPropiedadComponent,
    CategoriaComponent


  ]
})


export class ComponentesModule { }
