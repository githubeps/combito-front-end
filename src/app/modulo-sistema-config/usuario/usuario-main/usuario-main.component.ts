import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {
  show: boolean;

  constructor() { }

  ngOnInit() {
  }


  onActivate() {
    console.log("Activate outlet main");
   
   

  }  

  onDeactivate() {
    console.log("Deactivate outlet main");
    this.show = true;
   

  }

}
