import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TipoPropiedadModel } from 'src/app/model/tipo-propiedad-model';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-tipo-propiedad',
  templateUrl: './tipo-propiedad.component.html',
  styleUrls: ['./tipo-propiedad.component.scss']
})
export class TipoPropiedadComponent implements OnInit {

  public tipoPropiedadModel:TipoPropiedadModel;
  public tipoPropiedadsModel:TipoPropiedadModel[];

  @Output() 
  getObject: EventEmitter<TipoPropiedadModel> = new EventEmitter();  

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private configService:ConfigService) { }

  ngOnInit() {
    this.getAll();
  }


  _onSelectionChange(a,b) {
    this.getObject.emit(a.value);
  }  

  getAll(){

    
    this.crudHttpClientServiceShared.getall("tipopropiedad","getall",null)
      .subscribe(

        res=> {

          let array:TipoPropiedadModel[] = res.map(
            item => {
                return new TipoPropiedadModel(item.idtipopropiedad ,item.dsctipopropiedad);
            }
          ) ;

          this.tipoPropiedadsModel =  [new TipoPropiedadModel(-1,"")];

          array.forEach( item => {
            this.tipoPropiedadsModel.push(item);
          })

        }

      )


  }


}
