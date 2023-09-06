import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedServiceService {
  selectedServices: string[] = [];
  showPanell = false;

  constructor() {}

  toggleSelection(serviceName: string): void {
    if (this.isSelected(serviceName)) {
      // Si ya está seleccionado, lo eliminamos
      this.selectedServices = this.selectedServices.filter(service => service !== serviceName);
    } else {
      // Si no está seleccionado, lo agregamos
      this.selectedServices.push(serviceName);
    }
  }

  isSelected(serviceName: string): boolean {
    // Comprobamos si el elemento está en el array de seleccionados
    return this.selectedServices.includes(serviceName);
  }
}
