import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JugadorComponent } from '../jugador/jugador.component';

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

  listJugadores: any = [
    {posicion: 'Delantero', nombre: 'Cristiano Ronaldo'},
    {posicion: 'Delantero', nombre: 'Messi'},
    {posicion: 'Delantero', nombre: 'Neymar'},
  ]

  titleModal = '';

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  editarJugador( jugador: any) {
    this.titleModal = 'Editar Jugador';
    const dialogEditaTasa = this.dialog.open(JugadorComponent, {
      width: '670px',
      height: '90%',
      data: {
        jugador: jugador
      }
    });
  }

  eliminarJugador(jugador: any) {
    console.log("Eliminar jugador", jugador);
  }

}
