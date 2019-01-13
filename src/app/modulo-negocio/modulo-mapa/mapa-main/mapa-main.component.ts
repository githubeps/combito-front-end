import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer.js';
import ImageWMS from 'ol/source/ImageWMS.js';
import Projection from 'ol/proj/Projection.js';
import METERS_PER_UNIT from 'ol/proj/Projection';
import TileWMS from 'ol/source/TileWMS.js';
import OSM from 'ol/source/OSM.js';
import Control from 'ol/control/Control';
import { TipoServicioModel } from 'src/app/model/tipo-servicio-model';
import { CondicionConexionAguaModel } from 'src/app/model/condicion-conexion-agua-model';
import { TipoPropiedadModel } from 'src/app/model/tipo-propiedad-model';
import { CategoriaModel } from 'src/app/model/categoria-model';



@Component({
  selector: 'app-mapa-main',
  templateUrl: './mapa-main.component.html',
  styleUrls: ['./mapa-main.component.scss']
})
export class MapaMainComponent implements OnInit {

  public tipoServicioModel:TipoServicioModel;
  public condicionConexionAguaModel:CondicionConexionAguaModel;
  public tipoPropiedadModel:TipoPropiedadModel;
  public categoriaModel:CategoriaModel;

  public _tipoServicio:string="";
  public _condicionConexionAgua:string="";
  public _tipoPropiedad:string="";
  public _categoria:string="";

  map: Map;
  view: View;
  layer: TileLayer;

  panelOpenState = false;
  public filter: string = "include;";
  public filterParams: any = {
    'FILTER': null,
    'CQL_FILTER': null,
    'FEATUREID': null
  };


  constructor() { }

  ngOnInit() {
    this.crearTiled();
    //this.createMap();
  }

  // updateFilterx() {
  //   var filterType = document.getElementById('filterType').value;
  //   var filter = document.getElementById('filter').value;
  //   // by default, reset all filters
  //   var filterParams = {
  //     'FILTER': null,
  //     'CQL_FILTER': null,
  //     'FEATUREID': null
  //   };
  //   if (filter.replace(/^\s\s*/, '').replace(/\s\s*$/, '') != "") {
  //     if (filterType == "cql") {
  //       filterParams["CQL_FILTER"] = filter;
  //     }
  //     if (filterType == "ogc") {
  //       filterParams["FILTER"] = filter;
  //     }
  //     if (filterType == "fid")
  //       filterParams["FEATUREID"] = filter;
  //   }
  //   // merge the new filter definitions
  //   map.getLayers().forEach(function (lyr) {
  //     lyr.getSource().updateParams(filterParams);
  //   });
  // }

  updateFilter() {
    let filterParams = {
      'FILTER': null,
      'CQL_FILTER': null,
      'FEATUREID': null
    };

    this.f_actualiza_filter();

    
    if (this.filter.replace(/^\s\s*/, '').replace(/\s\s*$/, '') != "") {


      
      filterParams["CQL_FILTER"] = this.filter;
      //let filterParams = this.filterParams;
      // merge the new filter definitions
      this.map.getLayers().forEach(function (lyr) {

        lyr.getSource().updateParams(filterParams);
      });
    }
    else {
      filterParams["CQL_FILTER"] = "include;include";
      //let filterParams = this.filterParams;
      // merge the new filter definitions
      this.map.getLayers().forEach(function (lyr) {

        lyr.getSource().updateParams(filterParams);
      });
    }
  }

  resetFilter() {
    this.filter = "include;inclue";
    this.updateFilter();
  }
  crearTiled() {
    var format = 'image/png';
    var bounds = [-77.0067596435547, -6.07648897171021,
    -76.9367294311523, -5.97180843353271];

    var wmsSource = new ImageWMS({
      url: 'http://localhost:8085/geoserver/sigweb/wms',
      params: { 'LAYERS': 'sigweb:lote,sigweb:vpadron' },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });

    //params: {'FORMAT': format, 
    //'VERSION': '1.1.1',
    //tiled: true,
    //"LAYERS": 'sigweb:padron',
    //"exceptions": 'application/vnd.ogc.se_inimage',
    //tilesOrigin: -76.9985122680664 + "," + -6.06940889358521



    var wmsLayer = new ImageLayer({
      source: wmsSource
    });


    // var wmsSourcePadron = new ImageWMS({
    //   url: 'http://localhost:8082/geoserver/sigweb/wms',
    //   params: { 'LAYERS': 'sigweb:padron' },
    //   serverType: 'geoserver',
    //   crossOrigin: 'anonymous'
    // });

    // var wmsLayerPadron = new ImageLayer({
    //   source: wmsSourcePadron
    // });

    this.view = new View({
      center: [-76.97032, -6.03669],
      zoom: 16,
      projection: 'EPSG:4326',
    });

    this.map = new Map({
      layers: [wmsLayer],
      target: 'map',
      view: this.view
    });


    this.map.on('singleclick', function (evt) {

      let view = this.getView();
      let viewResolution = view.getResolution();
      var source = null;//untiled.get('visible') ? untiled.getSource() : tiled.getSource();
      var url = wmsSource.getGetFeatureInfoUrl(
        evt.coordinate, viewResolution, view.getProjection(),
        { 'INFO_FORMAT': 'text/html', 'FEATURE_COUNT': 50 });
      console.log(url);
    });

    // this.map.on('pointermove', function (evt) {
    //   if (evt.dragging) {
    //     return;
    //   }
    //   var pixel = this.map.getEventPixel(evt.originalEvent);
    //   var hit = this.map.forEachLayerAtPixel(pixel, function () {
    //     return true;
    //   });
    //   this.map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    // });


  }

  createMap() {

  }

  f_tipoServicio(e){
    this.tipoServicioModel = e;
    if(this.tipoServicioModel.idtiposervicio != -1){
      this._tipoServicio = "idtiposervicio="+this.tipoServicioModel.idtiposervicio;
    }else{
      this._tipoServicio = "";
    }
    
  }

  f_condicionConexionAgua(e){
    
    this.condicionConexionAguaModel = e;
    if(this.condicionConexionAguaModel.idcondicionconexionagua != -1){
      this._condicionConexionAgua = "idcondicionconexionagua="+this.condicionConexionAguaModel.idcondicionconexionagua;
    }else{
      this._condicionConexionAgua = "";
    }    
  }

  f_tipoPropiedad(e){
    
    this.tipoPropiedadModel = e;
    if(this.tipoPropiedadModel.idtipopropiedad != -1){
      this._tipoPropiedad = "idtipopropiedad="+this.tipoPropiedadModel.idtipopropiedad;
    }else{
      this._tipoPropiedad = "";
    }    
  }  

  f_categoria(e){
    this.categoriaModel = e;
    if(this.categoriaModel.idcategoria != -1){
      this._categoria = "idcategoria="+this.categoriaModel.idcategoria;
    }else{
      this._categoria = "";
    }  


  }
  f_actualiza_filter(){

    debugger;
    this.filter = "include;include";
    let _enlaceLogico1 = "";
    let _enlaceLogico2 = "";
    let _enlaceLogico3 = "";
    let _enlaceLogico4 = "";
    let _enlaceLogico5 = "";

    if(this._tipoServicio != "" ){
      this.filter = "include;" + this._tipoServicio;
      _enlaceLogico1 = " AND ";
    }

    if(this._condicionConexionAgua != "" ){
      this.filter = "include;" + this._tipoServicio + _enlaceLogico1 + this._condicionConexionAgua;
      _enlaceLogico2 = " AND ";
    }

    if(this._tipoPropiedad != "" ){
      this.filter = "include;" + this._tipoServicio + _enlaceLogico1 + this._condicionConexionAgua + _enlaceLogico2 + this._tipoPropiedad;
      _enlaceLogico3 = " AND ";
    }  

    //categoria
    if(this._categoria != "" ){
      this.filter = "include;" + this._tipoServicio + _enlaceLogico1 + this._condicionConexionAgua + _enlaceLogico2 + 
            this._tipoPropiedad + _enlaceLogico3 + this._categoria;

      _enlaceLogico4 = " AND ";
    }  
  }

}
