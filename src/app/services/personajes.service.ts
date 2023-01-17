import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private firestoreService: AngularFirestore) {}

  
  characters :Observable<any[]>;

  getCharacters(){
    this.characters = this.firestoreService.collection('personajes').snapshotChanges();
    return this.characters
  }

}
