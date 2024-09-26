import { Component } from '@angular/core';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {
  destinoBusqueda: string = ''; // Inicializa la variable para almacenar la entrada del destino
  viajesFiltrados: any[] = []; // Inicializa como un array vacío para los viajes filtrados

  constructor() {}

  // Método para filtrar los viajes disponibles
  buscarViajes() {
    // Aquí deberías conectar con tu base de datos para buscar los viajes disponibles.
    // Por ejemplo, vamos a agregar un conjunto de datos ficticios.
    const viajesDisponibles = [
      {
        conductorNombre: 'Juan Pérez',
        destino: 'DuocUc',
        horaSalida: '18:00',
        capacidadTotal: 4,
        asientosDisponibles: 2,
        costoPorPersona: 1500
      },
      {
        conductorNombre: 'María Gómez',
        destino: 'Concepción',
        horaSalida: '19:30',
        capacidadTotal: 5,
        asientosDisponibles: 1,
        costoPorPersona: 1200
      },
      {
        conductorNombre: 'Jose Luis',
        destino: 'Hualpen',
        horaSalida: '10:30',
        capacidadTotal: 5,
        asientosDisponibles: 4,
        costoPorPersona: 1100
      },
      {
        conductorNombre: 'Juan Pérez',
        destino: 'talcahuano',
        horaSalida: '12:30',
        capacidadTotal: 4,
        asientosDisponibles: 2,
        costoPorPersona: 1000
      }
    ];

    // Filtrar la lista de viajes según la búsqueda del destino
    this.viajesFiltrados = viajesDisponibles.filter(viaje =>
      viaje.destino.toLowerCase().includes(this.destinoBusqueda.toLowerCase())
    );
  }

  // Método para seleccionar un viaje
  solicitarViaje(viaje: any) {
    console.log('Solicitaste unirte a este viaje:', viaje);
    // Aquí podrías agregar lógica para confirmar la solicitud del viaje.
  }
}
