import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { SharedModule } from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PerfilService } from '../perfil/perfil.service';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule  ,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [MenuMainComponent],
  providers : [PerfilService]
})
export class MenuModule { }
