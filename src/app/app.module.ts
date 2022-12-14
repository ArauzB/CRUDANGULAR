import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component';
import { AgreeComponent } from './componente/agree/agree.component';
import { ModificarComponent } from './componente/modificar/modificar.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BuscarComponent } from './componente/buscar/buscar.component';
import { ExtrasComponent } from './componente/extras/extras.component';
import { DistritoComponent } from './componente/distrito/distrito.component';
import { DistritonoComponent } from './componente/distritono/distritono.component';
import { DepartamentoComponent } from './componente/departamento/departamento.component';
import { MunicipioComponent } from './componente/municipio/municipio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgreeComponent,
    ModificarComponent,
    BuscarComponent,
    ExtrasComponent,
    DistritoComponent,
    DistritonoComponent,
    DepartamentoComponent,
    MunicipioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
