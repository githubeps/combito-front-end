import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../shared/servicio/shared.service';


import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import swal from 'sweetalert2';
import { MSJ_ALERT_BORRAR, MSJ_SUCCESS } from '../../../shared/config.service.const';
import { Table } from 'primeng/table';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'ad-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css'],
  providers : [SharedService, CrudHttpClientServiceShared]
})

export class PerfilListComponent implements OnInit {
  
  public titulo:string = "Pefiles de usuario";
  
  public db_perfil: any;
  public showChild: boolean = false;
  public ShowBuqueda: boolean = false;

  @ViewChild('dt') dataTable: Table;
  public Typeahead = new Subject<string>();
  public filterPage: any;
  public filtrosActivos: any;
  public totalRecords: number;
  public http_model = 'perfil';

  public rowEdit: boolean = false;
  public valorInicialInputEdit: string;

   //-----------------------------------------//

  constructor(
    private sharedService:SharedService,
    private crudService: CrudHttpClientServiceShared
  ) { }

  ngOnInit() {
    this.maestros();
    this.initObservable(); 
  }

  private initObservable(): void {
    this.Typeahead.pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((res: any) => {

        const value = res[0]; 
        const field = res[1]; 
        const operator = res[2];
        
        this.dataTable.filter(value, field, operator);
      });
  }

  private maestros(): void {
    this.crudService.getall(this.http_model, 'getall').subscribe(
      (res: any) => {
         this.db_perfil = res; 
         this.totalRecords = res.totalCount;
         console.log(res); 
        }
      );
  }

  guardarEdit(item: any): void {
    this.rowEdit = false;
    if (this.valorInicialInputEdit !== item.dscperfil) {
      this.crudService.create(item, this.http_model, 'update').subscribe(
        res => console.log(res)
      );
    }
  }


  public borrarRegistro(data: any): any {
    swal(MSJ_ALERT_BORRAR).then((res: any) => {
      if (res.value) {
        this.crudService.delete(data.idperfil, this.http_model, 'delete').subscribe(res => {
          swal(MSJ_SUCCESS);
          // this.refreshModel(this.filtrosActivos); // cuando [lazy]="true"
          this.maestros();
        });
      }
    });
  }

  onActivateChild() { this.showChild = true; }
  onDeactivateChild() {
    this.showChild = false;
    if (this.sharedService.refreshByStorage(this.http_model)) {
       this.maestros()
    }
  }
}
