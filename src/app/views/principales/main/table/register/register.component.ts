import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formacion } from 'src/app/models/formacion.model';
import { DialogRef } from '@angular/cdk/dialog';
import data from '../../table/personaje.json';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  displayedColumns = ['nombreFormacion','personajeTop','personajeJg','personajeMid','personajeADC','personajeSupp','edit','delete']
  
  formaciones: Formacion[] = [
    new Formacion(1, 'lalaa','asdasd','asdasd','asdasd','asdasd','asdasd')
  ]
  
  constructor(private readonly dialogService: MatDialog){}

  addFormacion(){
    const dialog = this.dialogService.open(FormularioComponent)

    dialog.afterClosed().subscribe((value) => {
      console.log(value);
      if (value) {
        const lastId = this.formaciones[this.formaciones.length - 1]?.id;
        this.formaciones = [...this.formaciones, new Formacion(lastId + 1, value.nombreFormacion, value.personajeTop, value.personajeJg, value.personajeMid, value.personajeADC, value.personajeSupp)];
      }
    })
  }

  removeFormacion(formacion: Formacion) {
    this.formaciones = this.formaciones.filter((form) => form.id !== formacion.id );
  }

  ngOnInit(): void {
  }

}
