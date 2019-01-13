import { Component, OnInit } from '@angular/core';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { MenuModel } from '../menu-model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material';
import { isUndefined } from 'util';
import { ConfigService } from '../../../shared/config.service';
import { FormControl, Validators } from '@angular/forms';
import { MenuService } from '../../../core/menu/menu.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
  providers : [ConfigService]
  
})
export class MenuMainComponent implements OnInit {

  selectedRowIndex: string = "";
  public displayedColumns: string[] = ['idmenu', 'state', 'name', 'type','icon','orden','accion'];

  public menuModel:MenuModel;
  public menusModel:MenuModel[]=[new MenuModel()];

  dataSource: MatTableDataSource<MenuModel>;

  public idmenu = new FormControl('', [Validators.required]);

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared,breakpointObserver: BreakpointObserver, 
    private configService:ConfigService, private menuService: MenuService)
    {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
      this.displayedColumns :
      this.displayedColumns;
    });
   }

  ngOnInit() {
    this.getAll();
  }

  highlight(row) {

    this.selectedRowIndex = row.idmenu;
  }


  getAll(){
    this.crudHttpClientServiceShared.getall("menu","getallList")
      .subscribe(
        res=> {
            this.menusModel = res.map(
              item => {
                
                return new MenuModel(item.idmenu,item.label,item.leaf,item.obs,item.routerLink,item.orden,item.state,item.name,item.type,item.icon);
              }
            );

            this.dataSource = new MatTableDataSource(this.menusModel);
            
            console.log(this.menusModel)

        }
      )
  }

  save(e){

    this.configService.f_notEditRow(e);
  }

  addMenu(){
    let menu = new MenuModel();
    
    menu['isNew'] = true;
    this.configService.f_editRow(menu);
    this.menusModel.push(menu);
    this.dataSource = new MatTableDataSource(this.menusModel);

  }

  addMenuUsuario(){
    let x = {
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        {state: 'menu', name: 'MENU'},
        {state: 'timeline', name: 'MENU'}
      ]
    }    
    this.menuService.addMenuUsuario(x);
  }
}
