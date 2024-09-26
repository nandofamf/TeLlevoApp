import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png'
});

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements AfterViewInit {
  searchQuery: string = '';
  filteredDestinations: any[] = [];
  selectedDestination: any = null;
  solicitudes: any[] = []; // Lista de solicitudes

  private map?: L.Map;
  private marker?: L.Marker;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap(): void {
    const mapContainer = document.getElementById('mapId');
    if (mapContainer) {
      this.map = L.map(mapContainer, {
        center: [-33.4489, -70.6693],
        zoom: 13
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }
  }

  buscarDirecciones(event: any) {
    const query = event.target.value;
    if (query.trim() === '') {
      this.filteredDestinations = [];
      return;
    }

    this.http.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .subscribe((response: any) => {
        this.filteredDestinations = response.map((location: any) => ({
          nombre: location.display_name,
          descripcion: `Lat: ${location.lat}, Lng: ${location.lon}`,
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lon)
        }));
      });
  }

  seleccionarDestino(destino: any) {
    this.selectedDestination = destino;
    this.filteredDestinations = [];

    if (this.marker) {
      this.map?.removeLayer(this.marker);
    }

    this.marker = L.marker([destino.lat, destino.lng]).addTo(this.map!)
      .bindPopup(`<b>${destino.nombre}</b><br>${destino.descripcion}`).openPopup();

    this.map?.setView([destino.lat, destino.lng], 15);

    // Cargar solicitudes aleatorias al seleccionar el destino
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    // Generar solicitudes de ejemplo
    this.solicitudes = [
      { destino: 'Duoc Uc', hora: '08:30 AM', conductor: 'Juan Pérez',costo: 1500  },
      { destino: 'Universidad de Concepción', hora: '19:00 PM', conductor: 'María Gómez',costo: 1000  },
      { destino: 'Duoc Uc', hora: '16:30 PM', conductor: 'Carlos Sánchez', costo: 2000 },
    ];
  }
}
