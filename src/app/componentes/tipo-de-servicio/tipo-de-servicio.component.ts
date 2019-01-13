import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TipoServicioModel } from 'src/app/model/tipo-servicio-model';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-tipo-de-servicio',
  templateUrl: './tipo-de-servicio.component.html',
  styleUrls: ['./tipo-de-servicio.component.scss'],
  providers:[CrudHttpClientServiceShared,ConfigService]
})
export class TipoDeServicioComponent implements OnInit {


  tipoServiciosModel:TipoServicioModel[];
  tipoServicioModel:TipoServicioModel;

  @Output() 
  getObject: EventEmitter<TipoServicioModel> = new EventEmitter();  

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private configService:ConfigService ) { }

  ngOnInit() {
    this.getAll();
  }

  _onSelectionChange(a,b) {
    this.getObject.emit(a.value);
  }  

  getAll(){

    
    this.crudHttpClientServiceShared.getall("tiposervicio","getall",null)
      .subscribe(

        res=> {

          let array:TipoServicioModel[] = res.map(
            item => {
                return new TipoServicioModel(item.idtiposervicio,item.dsctiposervicio);
            }
          ) ;

          this.tipoServiciosModel =  [new TipoServicioModel(-1,"")];

          array.forEach( item => {
            this.tipoServiciosModel.push(item);
          })

        }

      )


  }

}
