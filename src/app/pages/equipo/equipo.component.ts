import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  nombreEquipo = "Equipo 1";

  listEntrenadores: any = [
    {value: 1, name: 'Manuel Vargas'},
    {value: 2, name: 'Carlos Matute'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
