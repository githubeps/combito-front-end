import { INPUTMASK_VALUE_ACCESSOR } from 'primeng/primeng';
import { BlockUIModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

//import { SharedService } from '../servicio/shared.service'
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorAutorizationService } from '../interceptor-autorization.service';

import swal from 'sweetalert2'
@Component({
  selector: 'ad-pagination',
  providers: [
  

  ],

  //changeDetection: ChangeDetectionStrategy.Default,
  template: `		
<p-blockUI [blocked]="blocked">

  
</p-blockUI>
      <div> 
			<nav aria-label="..." >
			  <ul class="pagination">

				<!-- 	First Page  -->
			   <li [ngClass]="getClassFirst()" #firstPage (click)="clickFirstPage(firstPage)">
			      <a  class="page-link"  aria-label="Previous1" style="border:none;" >
			        <span style="cursor: pointer;" data-toggle="tooltip" title="Primera Pagina" class="fa fa-fast-backward" aria-hidden="true"></span>
			     
			      </a>
			    </li>

			    <!-- Back Page -->
			    <li [ngClass]="getClassFirst()" #backPage (click)="clickBackPage(backPage)">
			      <a class="page-link" style="border:none;"   aria-label="Previous2">
			        <span style="cursor: pointer;" data-toggle="tooltip" title="Pagina anterior" class="fa fa-backward" aria-hidden="true"></span>
			        
			      </a>
			    </li>


          <!-- caption -->
         
			    <li Class="page-item" #caption>
			    <a  Class="page-link" style="font-size: 10px; border:none; margin-top:3px;" label="aqui">{{this.currentPage + 1}} de {{this.totalPages}} Pag / total Reg : {{this.totalRecords}}</a>	
			    

          </li>
          
			 	
			 	<!-- next page -->
			    <li [ngClass]="getClassLast()"  #nextPage (click)="clickNextPage(nextPage)">
			    	<a class="page-link" style="border:none;">
			    		<span style="cursor: pointer; border:none;" data-toggle="tooltip" title="Pagina siguiente" class="fa fa-forward" aria-hidden="true"></span>
			      	</a>
			    </li>

			    <!-- Last Page -->
			    <li [ngClass]="getClassLast()"  #lastPage (click)="clickLastPage(lastPage)">
			    	<a class="page-link" aria-label="Next2" style="border:none;">
              
			    		<span style="cursor: pointer;  border:none;" data-toggle="tooltip" title="Ultima pagina" class="fa fa-fast-forward"></span>
			      	</a>
			    </li>    
			   
			   <!-- rows for page -->
			  	<div class="div-inline" style="padding:5px;">
			   		<select style="color: blue; border:none;" data-toggle="tooltip" title="Filas por pagina" #rowForPage (change)="changeRowsForPage(rowForPage)">
			   			<option  *ngFor="let item of rowsForPageCbo">
			   				<div >
			   					{{item}}		
			   				</div>
			   				
			   				
			   			</option>
			   			
			   		</select>
			   	</div>
          
			   	
			    <!-- refresh Page -->
			    <li   (click)="refreshPage()">
			    	<a class="page-link"   aria-label="Next2" style="border:none;">
              
			    		<span style="cursor: pointer;  border:none;" data-toggle="tooltip" title="Actualizar pagina" class="fa fa-refresh"></span>
			      	</a>
			    </li>    				
			        
			    </ul>
			   
			 
			</nav>		

			</div>
	
		`

}

)
export class PaginationComponent {

  public swRefresh: Boolean = false;

  @Input()
  public totalRecords: number;

  @Input()
  totalPages;

  @Input()
  currentPage;

  @Input()
  rowsForPageCbo = [];

  @Input()
  model: any;

  @Input()
  servicio: any;

  @Input()
  filterPage: object;

  @Input()
  controller: string;

  @Input()
  evento: string;

  @Input()
  orden: string;

  @Input()
  _refreshPage: Boolean;

  @Input()
  paramsExtra: any;

  @Input()
  dataPagination:any;

  public set fiterPage(val: object) {
    //debugger;
    //this._fiterPage = val;
    this.pagination(null);
  }


  @Output() onPageChange: EventEmitter<any> = new EventEmitter<any>();




  public ispaginator: boolean = true;


  public rowsForPage: number = 10;

  private totalPage: number;
  public captionPagination: string = "";
  public divcero: number = 0;
  public currentPageForServer: number = 0;


  public firstRegistro: boolean = true;
  public lastRegistro: boolean = true;

  public currentPageAux: number = 0;

  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;
  public showPanelBuscarFlag: boolean = false;

  public disabledFirstPage: boolean = false;

  public displayModal: boolean = false;
  //-----------------------------------------//

  public parmasSerializado: any;

  constructor() {


  }
  ngOnInit() {

   
    this.rowsForPage = this.rowsForPageCbo[0];
    if(this.currentPage == null){
      this.currentPage = 10;
    }
    this.currentPageAux = this.currentPage + 1;
    this.setParamsExtra();

    //this.pagination(null)   ;
    
    this.pagination(this);
    

  }

  ngOnChanges(changes) {
   

  }

  setParamsExtra() {
    this.parmasSerializado = this.paramsExtra;
  }


  serialize(obj) {
    var p = [];
    for (var key in obj) {

      if (encodeURIComponent(obj[key]) == "null") {
        console.log("null");

      } else {
        p.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
    return p.join('&');

  }

  refreshPage() {
    
    this.pagination(this);

  }

  ngAfterViewInit() {

  }


  getClass(totalrecords) {

    this.totalRecords = totalrecords;

    return "";
  }
  getClassFirst() {


    if (this.currentPage == 0) {
      this.firstRegistro = true;
      return "page-item disabled";

    } else {
      this.firstRegistro = false;
      return "page-item";
    }
  }

  getClassLast() {

    let tp = this.totalPages;


    if (tp > 0) {
      if (this.currentPage + 1 == tp) {
        this.lastRegistro = true;
        return "page-item disabled";
      } else {
        this.lastRegistro = false;
        return "page-item";
      }
    } else {
      if (this.totalRecords > 0) {
        this.lastRegistro = false;
        return "page-item";
      } else {
        this.lastRegistro = true;
        return "page-item disabled";
      }

    }
  }


  getCaptionPagination(totalRecords) {
    //console.log("getCaptionPagination ...");

  }



  clickNextPage(e) {


    if (this.lastRegistro) {
      return;
    }


    let tr = this.totalRecords;
    let tp = this.totalPages;


    if (this.currentPage + 1 < tp) {
      this.currentPage++;
    }

    this.pagination(this);
    //this.onPageChange.emit(this);
  }


  clickLastPage(e) {
    if (this.lastRegistro) {
      return;
    }
    //console.log("Last Page");

    this.currentPage = this.totalPages - 1;

    this.pagination(this);
    //this.onPageChange.emit(this);

  }

  clickBackPage(e) {
    if (this.firstRegistro) {
      return;
    }

    if (this.currentPage > 0) {
      this.currentPage--;
    }

    this.pagination(this);
    //this.onPageChange.emit(this);

  }

  clickFirstPage(e) {

    if (this.firstRegistro) {
      return;
    }

    this.currentPage = 0;

    this.pagination(this);
    //this.onPageChange.emit(this);
  }

  changeRowsForPage(e) {

    this.currentPage = 0;

    this.rowsForPage = e.value;


    this.pagination(this);
    //this.onPageChange.emit(this);
    //console.log(e);
  }

  bloquearPantalla(){
    this.blocked = true;
  }
  desbloquearPantalla(){
    this.blocked = false;
  }

  public pagination(e) {

    if (this.model == null) {
      this.currentPage = 0;
      this.rowsForPage = this.rowsForPage;

      this.onPageChange.emit(e);


    } else {
     
     
      this.currentPage = e.currentPage;
      this.rowsForPage = e.rowsForPage;
      this.totalRecords = e.totalCount;
      this.onPageChange.emit(e);
     
    }


   

  }


  getTotalPages(totalrecords, rowsforpage) {
    let totalpage = 0;

    if (totalrecords == 0) {
      totalpage = 0;
    }
    else {
      let str = (totalrecords / rowsforpage).toString();
      let pag = parseInt(str, 10);
      let resto = totalrecords % rowsforpage;

      if (resto > 0) {
        totalpage = pag + 1
      } else {
        totalpage = pag;
      }
    }
    this.totalRecords = totalrecords;
    this.totalPages = totalpage;
    //return totalpage;
  }


}

