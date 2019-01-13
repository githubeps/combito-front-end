import { RouterModule, Routes } from '@angular/router/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


import { MenuModule,PanelMenuModule} from 'primeng/primeng';


const routes : Routes = [
  {
    path : '',
    component : HomeComponent
   
  }
 

];

@NgModule({
  imports: [
    CommonModule,
    MenuModule,PanelMenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
  
  
})
export class HomeModule { }
