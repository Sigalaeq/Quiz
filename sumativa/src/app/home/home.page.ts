import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Eventos: any = [];
  EventN = new FormControl('');
  Nombre = new FormControl('');
  Ubicacion = new FormControl('');
  Telefono = new FormControl('');
  Fecha1 = new FormControl('');
  Fecha2 = new FormControl('');

  addEvento() {
    if (this.EventN.value && this.Nombre.value && this.Ubicacion.value && this.Telefono.value && this.Fecha1.value && this.Fecha2.value) {
      this.Eventos.push({
        EventN: this.EventN.value, Nombre: this.Nombre.value, Ubicacion: this.Ubicacion.value,
        Telefono: this.Telefono.value, Fecha1: this.Fecha1.value, Fecha2: this.Fecha2.value
      });
      this.EventN.setValue('');
      this.Nombre.setValue('');
      this.Ubicacion.setValue('');
      this.Telefono.setValue('');
      this.Fecha1.setValue('');
      this.Fecha2.setValue('');
    }

  }


  constructor() { }
}
