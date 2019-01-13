import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { ConfigService } from 'src/app/shared/config.service';
import { CondicionConexionAguaModel } from 'src/app/model/condicion-conexion-agua-model';

@Component({
  selector: 'app-condicion-conexion-agua',
  templateUrl: './condicion-conexion-agua.component.html',
  styleUrls: ['./condicion-conexion-agua.component.scss']
})
export class CondicionConexionAguaComponent implements OnInit {

  condicionConexionAguasModel:CondicionConexionAguaModel[];
  condicionConexionAguaModel:CondicionConexionAguaModel;

  @Output() 
  getObject: EventEmitter<CondicionConexionAguaModel> = new EventEmitter();  

  
  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private configService:ConfigService) { }

  ngOnInit() {
    this.getAll();
  }


  _onSelectionChangeCondicionConexion(a,b) {
    this.getObject.emit(a.value);
  }  

  getAll(){

    
    this.crudHttpClientServiceShared.getall("condicionconexionagua","getall",null)
      .subscribe(

        res=> {

          let array:CondicionConexionAguaModel[] = res.map(
            item => {
                return new CondicionConexionAguaModel(item.idcondicionconexionagua ,item.dsccondicionconexionagua);
            }
          ) ;

          this.condicionConexionAguasModel =  [new CondicionConexionAguaModel(-1,"")];

          array.forEach( item => {
            this.condicionConexionAguasModel.push(item);
          })

        }

      )


  }  

}
