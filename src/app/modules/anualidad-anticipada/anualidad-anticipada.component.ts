import { Component } from '@angular/core';

@Component({
  selector: 'app-anualidad-anticipada',
  templateUrl: './anualidad-anticipada.component.html',
  styleUrls: ['./anualidad-anticipada.component.css']
})
export class AnualidadAnticipadaComponent {

  checked: boolean = false;
  monto: number = 0;
  periodos: number = 0;
  tasaInteres: number = 0;
  tiempo: number = 1;
  touchedmonto: boolean = false;
  touchedperiodos: boolean = false;
  touchedtasaInteres: boolean = false;
  touchedtiempo: boolean = false;
  valorFuturo = '';
  nombreValor: string = '';
  activarResultado: boolean = false;
  tipoValor: string = '';

  calculate() {
    if (!this.checked) {
      let valor = 0;
      let interes = (this.tasaInteres/100);
      switch (this.tipoValor) {
        default:
          //Valor Futuro
          this.nombreValor = 'futuro';
          valor = this.monto * ((((1+interes)**this.periodos)-1) / interes) * (1+interes);
          break;
        case 'valor-presente':
          this.nombreValor = 'presente';
          valor = this.monto * ((1-((1+interes)**-this.periodos)) / interes) * (1+interes);
          break;
      }
      this.valorFuturo = this.formatNumber(valor);
    } 
    this.activarResultado = true;
  }

  formatNumber(value: number): string {
    const parts = value.toFixed(3).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return parts.join(',');
  }

}
