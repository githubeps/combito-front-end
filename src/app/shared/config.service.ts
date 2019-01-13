import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { isUndefined } from 'util';
import * as jwt_decode from "jwt-decode";



@Injectable()
export class ConfigService {

    _protocol:string; //= window.location.protocol + "//" ;
    _host:string ;//= window.location.host.indexOf(":") ==-1?window.location.host:window.location.host.substr(0, window.location.host.indexOf(":"));
    _port:string;// = ":8081"
    _portPunto:String;
    _url:string ;//= this.protocol+this.host+this.port;  
    _rutahostserver:string; //= "sigwebficha";
    _corsFilter:string;  
    _headers:Headers;

  constructor() { 
    this._protocol= window.location.protocol + "//" ;
    this._host= window.location.host.indexOf(":") ==-1?window.location.host:window.location.host.substr(0, window.location.host.indexOf(":"));
    this._port= ":8082";
    this._portPunto = ":8083";
    this._url= this._protocol+this._host;  
    this._rutahostserver = "sigweb";    
    this._corsFilter = ""; 

  }

  getRutaPunto(){
    return this._url+ this._port +"/";
  }
  
  getRutaBase(){
    return this._url+ this._port +"/";
  }

  getHost(){
    return this._host;
  }

  getPort(){
    return this._port;
  }

  getUrlSecurityRes(controller,evento){
  
    return this._url+ this._port +"/"+this._rutahostserver+ this._corsFilter +"/"+  controller+"/"+evento;
  }
  getUrlLogin(controller,evento){
  
    return this._url+ this._port +"/"+this._rutahostserver+"/"+controller+"/"+evento;
  }
  getUrlBasic(controller,evento){
  
    return this._url+ this._port +"/"+this._rutahostserver+"/"+controller+"/"+evento;
  }

  getUrlSecurity(controller){
  
    return this._url+ this._port +"/"+this._rutahostserver+"/"+controller;
  }  
  getProtocol(){
    return this._protocol;
  }

  getRutahostserver(){
    return this._rutahostserver;
  }

  getHeadersJson() {
   // let username = this.variables.getUsername();
   // let password = this.variables.getPassword();
    let username = "username";
    let password = "password";
    let headers =  new Headers();
    //headers.append("Content-Type", "text/xml");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true"); 
    headers.append("Authorization", 'Bearer '+localStorage.getItem("token"));
    headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    headers.append("Content-Type", "application/json");
    //headers.append("Content-Type","application/x-www-form-urlencoded");
    //headers.append("Access-Control-Request-Headers", "Content-type,X-Requested-With,Origin,accept");
    //let options = new RequestOptions({headers: headers});
    //console.log(JSON.stringify(options));
    //return options;
}    

getHeadersForm() {
   // let username = this.variables.getUsername();
   // let password = this.variables.getPassword();
    let username = "username";
    let password = "password";
    let headers =  new Headers();
    //headers.append("Content-Type", "text/xml");
    //headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true"); 
    headers.append("Authorization", 'Bearer '+localStorage.getItem("token"));
    headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    headers.append("Content-Type","application/x-www-form-urlencoded");

       headers.append('X-Requested-Width','XMLHttpRequest');
       headers.append("Cache-Control", "no-cache");    
    //headers.append("Access-Control-Request-Headers", "Content-type,X-Requested-With,Origin,accept");
    //let options = new RequestOptions({headers: headers});
    //console.log(JSON.stringify(options));
   // return options;
}


getHeaderHttpClientFormPost(){
  let headers= new HttpHeaders()
         
          .set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
          .set("Content-Type","application/x-www-form-urlencoded")
          .set("Access-Control-Allow-Credentials", "true")

  return headers;
}
getHeaderHttpClientFormPostTypeJson(){
  let headers= new HttpHeaders()
         
          .set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
          .set("Content-Type", "application/json")
          .set('Accept', 'application/json')
          .set("Access-Control-Allow-Credentials", "true")
          .set('Access-Control-Allow-Origin', '*');

  return headers;
}
getHeaderHttpClientFormPostOnlyTypeJson(){
  let headers= new HttpHeaders()
         
          .set("Access-Control-Allow-Methods", "POST")
          .set("Content-Type", "application/json")
          .set("Access-Control-Allow-Credentials", "true")
          .set('Accept', 'application/json')
          .set('Access-Control-Allow-Origin', '*')

  return headers;
}
getHeaderHttpClientForm(){
  let headers= new HttpHeaders()
          .set('Authorization', 'Bearer '+localStorage.getItem("token"))
          .set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
          .set("Content-Type","application/x-www-form-urlencoded")
          .set("Access-Control-Allow-Credentials", "true")

  return headers;
}


getHeaderHttpClientGet(){
  let headers= new HttpHeaders()
          .set('Authorization', 'Bearer '+localStorage.getItem("token"))
          .set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
          .set("Content-Type", "application/json")
          .set("Access-Control-Allow-Credentials", "true")

  return headers;
}

getHeadersFormBlob() {
    let username = "username";
    let password = "password";
    let headers =  new Headers();
    headers.append("Access-Control-Allow-Credentials", "false"); 
    headers.append("Authorization", 'Bearer '+localStorage.getItem("token"));
    headers.append("responseType","ResponseContentType.Blob") 

}



  serialize(obj){
        var p = [];
        for (var key in obj) {
        	
        	if( encodeURIComponent(obj[key]) == "null"){
        		//console.log("null");
            	
        	}else{
        		p.push(key + '=' + encodeURIComponent(obj[key]));
        	}
        }
        return p.join('&');
    
    }	  
    
    getDateString(fecha){
  
      let  today = fecha;
      let d = today;
      let m = today.getMonth() + 1;
      let mes = (m < 10) ? '0' + m : m;
      let yy = fecha.getYear();
      var year = (yy < 1000) ? yy + 1900 : yy;

      let sFecha = today.getDate()+'/' +mes+'/'+year;

      return [ today.getDate(), mes,year].join('/');

      //return sFecha;
            
    }

    getHoraString(fecha){
    
      let today=fecha;
      let h=today.getHours();
      let m=today.getMinutes();
      let s=today.getSeconds();
      let hora = h+':'+m+':'+s;
    
      return hora;
      
    }

    stringToDate(_date,_format,_delimiter)
    {
                var formatLowerCase=_format.toLowerCase();
                var formatItems=formatLowerCase.split(_delimiter);
                var dateItems=_date.split(_delimiter);
                var monthIndex=formatItems.indexOf("mm");
                var dayIndex=formatItems.indexOf("dd");
                var yearIndex=formatItems.indexOf("yyyy");
                var month=parseInt(dateItems[monthIndex]);
                month-=1;
                var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
                return formatedDate;
    }    

    stringToTime(_date,_format,_delimiter)
    {           
                let now = new Date();
                var formatLowerCase=_format.toLowerCase();
                var formatItems=formatLowerCase.split(_delimiter);
                var dateItems=_date.split(_delimiter);
                var horaIndex=formatItems.indexOf("hh");
                var minIndex=formatItems.indexOf("mm");
                var segIndex=formatItems.indexOf("ss");

                let hora = dateItems[horaIndex];
                let min = dateItems[minIndex];
                let seg = dateItems[segIndex];

                now.setHours(hora);
                now.setMinutes(min);

                if(!seg == undefined)
                  now.setSeconds(seg);

   
                return now;
    }
    
    // convierte date(object | moment | string) a string 
    getDateToStringAllType(fecha: any): string {
      let fechaRpt: string = '';
      switch (typeof fecha) {
        case 'object': // date // moment // si es moment trae la fecha en _d
          const f = fecha._d ? fecha._d : fecha        
          fechaRpt = this.getDateString(f);
          break;
        case 'string':
          fechaRpt = fecha;      
          break;
      }    
  
      return fechaRpt;
    }

    setMapToString(obj){
      obj.array.forEach(element => {
        debugger;
      });
    }

    f_editRow(e){
      let evilResponseProps = Object.keys(e);
       for (let index = 0; index < evilResponseProps.length; index++) {
         
         let element = evilResponseProps[index].toString()+'Edit';
         let existe = e[element];
         if(isUndefined(existe)){
          e[element] = true;
         }else{
          e[element] = true;
         }
       }    
    }
  
    f_notEditRow(e){
      let evilResponseProps = Object.keys(e);
       for (let index = 0; index < evilResponseProps.length; index++) {
         
         let element = evilResponseProps[index].toString()+'Edit';
         let existe = e[element];
         if(isUndefined(existe)){
          e[element] = false;
         }else{
          e[element] = false;
         }
       }    
       this.f_deleteObject(e);
    }

    f_deleteObject(e){
      let evilResponseProps = Object.keys(e);
       for (let index = 0; index < evilResponseProps.length; index++) {
         
         let element = evilResponseProps[index].toString()+'Edit';
         let existe = e[element];
         if(!isUndefined(existe)){
          delete e[element] 
         }
       }  
       
       if(!isUndefined(e.isNew)){
        delete e.isNew; 
       }       
    }
  
    f_editCell(e,id){
      let propertyEdit = id + "Edit";
      if(isUndefined(e[propertyEdit])){
        e[propertyEdit] = true;
      }else{
        e[propertyEdit] = true;
      }
  
    }
  
    f_notEditCell(e,id){
      let propertyEdit = id + "Edit";
      if(isUndefined(e[propertyEdit])){
        e[propertyEdit] = false;
      }else{
        e[propertyEdit] = false;
      }
      
    }


  // cocina los filtros hechos manualmente separados por (:) y (,) que se enviaran al back end - que no sea paginacion
  // formato de ejemplo: "campo:valor:matchMode,campo:valor:matchMode"
  // formato de ejemplo: "filial.idfilial:1:equals,usario:mramirez:contains"
  jsonFilter(filtros: string): any {
    let jsonRpt: string = '{}';// filtrar todos 
    if ( filtros !==""){
      const _filtros = filtros.split(',');      
       jsonRpt = '';
      _filtros.map((x: any) => {
        const filtro = x.split(':');
        const matchMode = filtro[2] || 'contains';
        jsonRpt += `"${filtro[0]}":{"value": "${filtro[1]}", "matchMode":"${matchMode}"},`;
      });
  
      jsonRpt = '{' + jsonRpt.slice(0, -1) + '}';
    }
        
    jsonRpt = JSON.parse(jsonRpt);
    return jsonRpt;
  }

   ///// recibe los filtros del table primeng y los pasa a un formato del back-end paginacion
  /// ejemplo: {"field": "cuenta.banco", "operator": "startswith", "value": "BANCO"}
  jsonFilterTablePrime(obj: any): string {
    const filtros = JSON.stringify(obj);
    obj = JSON.parse(filtros);
    
    let rpt: object;
    let arr_filtros: any[] = [];
    let arr_filtro_varios: any[] = [];
    let operador = 'contains';
    let field = '';
    
    Object.keys(obj).map(function (key, index) {        
      operador = obj[key].operator ? obj[key].operator : 'contains';
      field = obj[key].field;

        if (index === 0) {
          arr_filtros.push({ "field": field, "operator": operador, "value": obj[key].value });
        }
        else {                              
          arr_filtro_varios.push({ "field": field, "operator": operador, "value": obj[key].value });
        }
    });
    if ( arr_filtro_varios.length > 0) { arr_filtros.push({ "logic": 'or', "filters": arr_filtro_varios}) }
        
    if (obj === '{}' || Object.keys(obj).length === 0) { rpt = {} } else { rpt = { "logic": 'and', "filters": arr_filtros }; } 

    //console.log('stringify', JSON.stringify(rpt));
    return JSON.stringify(rpt);
  }
    

  //Decodifica Token
  getIdUsuarioToken():string{
    let idToken = localStorage.getItem("token");

    let decodificado = jwt_decode(idToken);

    return decodificado['idusuario'];
   
  }

  getCntCambioPass():string{
    let idToken = localStorage.getItem("token");

    let decodificado = jwt_decode(idToken);

    return decodificado['cntCambioClave'];
   
  }

  getIdFilialToken(){
    let idToken = localStorage.getItem("token");

    let decodificado = jwt_decode(idToken);

    return decodificado['filial'];
  }
  
  getNumeroEntrega(){
    let idToken = localStorage.getItem("token");

    let decodificado = jwt_decode(idToken);

    return decodificado['numeroEntrega'];
  }  

  getAnnoQaliwarma(){
    let idToken = localStorage.getItem("token");

    let decodificado = jwt_decode(idToken);

    return decodificado['annoQaliwarma'];
  }  
}
