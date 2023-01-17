import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/principales/navbar/navbar.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { MainComponent } from './views/principales/main/main.component';
import { FooterComponent } from './views/principales/footer/footer.component';
import { TableComponent } from './views/principales/main/table/table.component';
import { FiltroClasePipe } from './pipes/filtro-clase.pipe';
import { RegisterComponent } from './views/principales/main/table/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

 import * as firebase from 'firebase/app';
import { AngularFirestore, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
//import { FirestoreService } from './services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

//firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    FooterComponent,
    TableComponent,
    FiltroClasePipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AngularFirestore,
 
    AngularFireAuth,
   // FirestoreService,
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: { appearance: 'fill' },
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
