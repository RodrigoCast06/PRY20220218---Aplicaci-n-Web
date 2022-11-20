import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo/equipo.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { JugadorComponent } from './jugador/jugador.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    EquipoComponent,
    AnalisisComponent,
    ResultadoComponent,
    PagesComponent,
    JugadorComponent
  ],
  exports: [
    PagesComponent,
    EquipoComponent,
    AnalisisComponent,
    ResultadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MatDialogModule
  ]
})
export class PagesModule { }
