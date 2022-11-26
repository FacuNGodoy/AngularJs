import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  linea: string;
}

const PersonajesSupp: Personaje[]  = [
  {
    nombre: "Thresh",
    linea: "Supp",
  },
  {
    nombre: "Sett",
    linea: "Top",
  },
  {
    nombre: "Ahri",
    linea: "Mid",
  },
  {
    nombre: "Zyra",
    linea: "Supp",
  },
  {
    nombre: "Janna",
    linea: "Supp",
  },
  {
    nombre: "Karman",
    linea: "Supp",
  }
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  show: boolean=false;
  support: string="";
  personajes = PersonajesSupp as [];

  constructor() { }

  ngOnInit(): void {
  }

  supp() {
    this.support="supp";
    this.show = !this.show
    console.log(this.show);
    
  }
}
