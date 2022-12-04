import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import data from '../../table/personaje.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  personajes = data;

  nombreFormacionControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  personajeTopControl= new FormControl('', [Validators.required])
  personajeJgControl= new FormControl('', [Validators.required])
  personajeMidControl= new FormControl('', [Validators.required])
  personajeADCControl= new FormControl('', [Validators.required])
  personajeSuppControl= new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    nombreFormacion: this.nombreFormacionControl,
    formacion: new FormGroup({
      top: new FormGroup({
        personajeTop: this.personajeTopControl
      }),
      jg: new FormGroup({
        personajeJg: this.personajeJgControl
      }),
      mid: new FormGroup({
        personajeMid: this.personajeMidControl
      }),
      adc: new FormGroup({
        personajeADC: this.personajeADCControl
      }),
      supp: new FormGroup({
        personajeSupp: this.personajeSuppControl
      })
    })
  })

  onSubmit() {
    console.log(this.registerForm.value);    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
