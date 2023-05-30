import { Component } from '@angular/core';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./descuento.component.css']
})
export class DescuentoComponent {
  checked: boolean = false;
  monto: number = 0;
  tiempoTranscurrido: number = 0;
  tasaInteres: number = 0;
  tiempo: number = 1;
  touchedmonto: boolean = false;
  touchedtiempoT: boolean = false;
  touchedtasaInteres: boolean = false;
  touchedtiempo: boolean = false;
  valorDescuento = '';
  valorTotalDescuento = '';
  activarResultado: boolean = false;
  tipoTiempo: string = '';

  calculate() {
    if (!this.checked) {
      let tiempo = 0;
      switch (this.tipoTiempo) {
        default:
          //Días
          tiempo = this.tiempoTranscurrido / 360;
          break;
        case 'Meses':
          tiempo = this.tiempoTranscurrido / 12;
          break;
      }
      let valorDescuento=this.monto * (this.tasaInteres / 100) * tiempo;
      this.valorDescuento = this.formatNumber(valorDescuento);
      this.valorTotalDescuento = this.formatNumber(this.monto - valorDescuento);
    } 
    this.activarResultado = true;
  }

  formatNumber(value: number): string {
    const parts = value.toFixed(3).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return parts.join(',');
  }
}
