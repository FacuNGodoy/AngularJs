import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import data from '../../../table/personaje.json';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  personajes = data;

  nombreFormacionControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  personajeTopControl= new FormControl('', [Validators.required])
  personajeJgControl= new FormControl('', [Validators.required])
  personajeMidControl= new FormControl('', [Validators.required])
  personajeADCControl= new FormControl('', [Validators.required])
  personajeSuppControl= new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    nombreFormacion: this.nombreFormacionControl,
    personajeTop: this.personajeTopControl,
    personajeJg: this.personajeJgControl,
    personajeMid: this.personajeMidControl,
    personajeADC: this.personajeADCControl,
    personajeSupp: this.personajeSuppControl,
  })

  constructor(private readonly dialogRef: DialogRef) { }

  lista(){
    this.personajes = data;
    console.log(
      this.registerForm.value.personajeTop
    );
    
    //if (this.personajes.includes()
console.log(this.personajes);

  }

  close(){
    this.dialogRef.close()
  }
  
  ngOnInit(): void {
    this.lista();
  }

}
