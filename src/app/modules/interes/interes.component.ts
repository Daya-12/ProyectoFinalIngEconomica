import { Component } from '@angular/core';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css'],
})
export class InteresComponent {
  checked: boolean = false;
  deuda: number = 0;
  tasaInteres: number = 0;
  tiempo: number = 1;
  toucheddeuda: boolean = false;
  touchedtasaInteres: boolean = false;
  touchedtiempo: boolean = false;
  valorInteresSimple = '';
  valorTotalInteresSimple = '';
  valorInteresCompuesto = '';
  valorTotalInteresCompuesto = '';
  activarResultado: boolean = false;
  tipoInteresSimple: string = '';

  calculate() {
    if (!this.checked) {
      let tiempoInteresSimple = 0;
      switch (this.tipoInteresSimple) {
        case 'Comercial':
          tiempoInteresSimple = 30 / 360;
          break;
        case 'Bancario':
          tiempoInteresSimple = 31 / 360;
          break;
        case 'Racional':
          tiempoInteresSimple = 31 / 365;
          break;
        default:
          //Ideal
          tiempoInteresSimple = 30 / 365;
          break;
      }
      let valorInteresSimple=this.deuda * (this.tasaInteres / 100) * tiempoInteresSimple;
      this.valorInteresSimple = this.formatNumber(valorInteresSimple);
      this.valorTotalInteresSimple = this.formatNumber(valorInteresSimple + this.deuda);
    } else {
      let tasaPeriodo = (this.tasaInteres/100)/12; // Dividir por 12 para convertir la tasa anual en tasa mensual PAGO DE INTERESES MENSUALMENTE
      let montoFinal = this.deuda * Math.pow(1 + tasaPeriodo, this.tiempo);
      let interesCompuesto = montoFinal - this.deuda;

      this.valorInteresCompuesto = this.formatNumber(interesCompuesto);
      this.valorTotalInteresCompuesto = this.formatNumber(montoFinal);
    }
    this.activarResultado = true;
  }

  onSwitchChange() {
    this.deuda = 0;
    this.tasaInteres = 0;
    this.tiempo = 1;
  }

  formatNumber(value: number): string {
    const parts = value.toFixed(3).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return parts.join(',');
  }

}
