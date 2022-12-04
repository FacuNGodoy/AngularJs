import { Component, OnInit } from '@angular/core';
import data from '../table/personaje.json';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  show: boolean=false;
  support: string="";
  personajes = data;

  constructor() { }

  ngOnInit(): void {
    // this.consoleLog(data[0].name)
  }

  supp() {
    if(!this.support){
      this.support="supp";
    } else{
      this.support="";
    }
    this.show = !this.show
    console.log(this.show);
  }

  consoleLog(valor:any){
    console.log(valor);
  }
}
