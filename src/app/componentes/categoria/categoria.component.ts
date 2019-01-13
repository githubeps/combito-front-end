import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { ConfigService } from 'src/app/shared/config.service';
import { CategoriaModel } from 'src/app/model/categoria-model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  public categoriaModel:CategoriaModel;
  public categoriasModel:CategoriaModel[];

  @Output() 
  getObject: EventEmitter<CategoriaModel> = new EventEmitter();  

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private configService:ConfigService) { }

  ngOnInit() {
    this.getAll();
  }


  _onSelectionChange(a,b) {
    this.getObject.emit(a.value);
  }  

  getAll(){

    
    this.crudHttpClientServiceShared.getall("categoria","getall",null)
      .subscribe(

        res=> {

          let array:CategoriaModel[] = res.map(
            item => {
                return new CategoriaModel(item.idcategoria ,item.dsccategoria);
            }
          ) ;

          this.categoriasModel =  [new CategoriaModel(-1,"")];

          array.forEach( item => {
            this.categoriasModel.push(item);
          })

        }

      )


  }

}
