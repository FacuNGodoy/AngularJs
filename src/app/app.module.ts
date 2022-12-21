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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './modules/my-material.module';
import { FormularioComponent } from './views/principales/main/table/register/formulario/formulario.component';
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
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
