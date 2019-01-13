import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../menu-model';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers : [CrudHttpClientServiceShared]
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = ['idmenu', 'label', 'icon', 'leaf'];

  public menuModel:MenuModel;
  public menusModel:MenuModel[];

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.crudHttpClientServiceShared.getall("menu","getall")
      .subscribe(
        res => {
          debugger;
          this.menusModel = res;
        }
      ),
      error=> {
        console.log(error);
      } ,
      ()=> {
        console.log("Fin...");
      }
  }

}
