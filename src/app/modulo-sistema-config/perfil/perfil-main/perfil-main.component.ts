import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-perfil-main',
  templateUrl: './perfil-main.component.html',
  styleUrls: ['./perfil-main.component.css']
})
export class PerfilMainComponent implements OnInit {
  public show: boolean=true;

  constructor() { }

  ngOnInit() {
  }


  onActivate() {
    console.log("Activate outlet main perfil");
    
   

  }  

  onDeactivate() {
    console.log("Deactivate outlet main");
    this.show = true;
   

  }

}
