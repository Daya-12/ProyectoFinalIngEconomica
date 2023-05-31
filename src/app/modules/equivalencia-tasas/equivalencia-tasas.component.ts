import { Component } from '@angular/core';

@Component({
  selector: 'app-equivalencia-tasas',
  templateUrl: './equivalencia-tasas.component.html',
  styleUrls: ['./equivalencia-tasas.component.css']
})
export class EquivalenciaTasasComponent {
  periodosConocidos: number = 0;
  tasaInteres: number = 0;
  touchedperiodosConocidos: boolean = false;
  touchedtasaInteres: boolean = false;
  periodoElegido: any;
  activarResultado: boolean = false;
  tasaConvertida: string = '';
  porcentaje: string = '';


  periodos = [
    { name: 'Mensual' },
    { name: 'Bimestral' },
    { name: 'Trimestral' },
    { name: 'Semestral' },
    { name: 'Anual' }];

  calculate() {
    let periodoAConvertir = 0;
    switch (this.periodoElegido.name) {
      case 'Mensual':
        periodoAConvertir = 12;
        break;
      case 'Bimestral':
        periodoAConvertir = 6;
        break;
      case 'Trimestral':
        periodoAConvertir = 4;
        break;
      case 'Semestral':
        periodoAConvertir = 2;
        break;
      default:
        periodoAConvertir = 1;
        break;
    }
    const conversionTasa = Math.pow(Math.pow((1+(this.tasaInteres/100)),this.periodosConocidos), 1/periodoAConvertir)-1;
    this.tasaConvertida=this.formatNumber(conversionTasa);
    this.porcentaje=this.formatNumber(conversionTasa*100).concat("%");
    this.activarResultado=true;
  }

  formatNumber(value: number): string {
    const parts = value.toFixed(3).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return parts.join(',');
  }
  
}
