import { Component } from '@angular/core';

@Component({
  selector: 'app-capitalizacion',
  templateUrl: './capitalizacion.component.html',
  styleUrls: ['./capitalizacion.component.css']
})
export class CapitalizacionComponent {
  valorfuturo: number = 0;
  tasaInteres: number = 0;
  tiempo: number = 1;
  touchedvalorfuturo: boolean = false;
  touchedtasaInteres: boolean = false;
  touchedtiempo: boolean = false;
  activarResultado: boolean = false;
  valorCuota: string = '';
  datosTabla: ITabla[] = [];
  datosConvertidos:any[] =[];


  calculate() {
    const valorCuota = this.valorfuturo / (((Math.pow(1 + (this.tasaInteres/100), this.tiempo)) - 1) / (this.tasaInteres / 100))
    for (let i = 0; i < this.tiempo; i++) {
      this.datosTabla[i] = {} as ITabla;
      this.datosTabla[i].periodo = i + 1;
      this.datosTabla[i].cuota = valorCuota;
      if (this.datosTabla[i].periodo == 1) {
        this.datosTabla[i].interes = 0;
        this.datosTabla[i].incremento = valorCuota;
        this.datosTabla[i].saldo = valorCuota;
      }
      else {
        this.datosTabla[i].interes = this.datosTabla[i - 1].saldo*(this.tasaInteres/100);
        this.datosTabla[i].incremento = this.datosTabla[i].interes + this.datosTabla[i].cuota;
        this.datosTabla[i].saldo = this.datosTabla[i - 1].saldo + this.datosTabla[i].incremento;
      }
    }
    for (let i = 0; i < this.datosTabla.length; i++) {
      this.datosConvertidos[i] = {};
      this.datosConvertidos[i].periodo=this.datosTabla[i].periodo;
      this.datosConvertidos[i].saldo=this.formatNumber(this.datosTabla[i].saldo);
      this.datosConvertidos[i].interes=this.formatNumber(this.datosTabla[i].interes);
      this.datosConvertidos[i].cuota=this.formatNumber(this.datosTabla[i].cuota);
      this.datosConvertidos[i].incremento=this.formatNumber(this.datosTabla[i].incremento);
    };
    
    this.activarResultado=true;
  }

  formatNumber(value: number): string {
    const parts = value.toFixed(3).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
  }
}

export interface ITabla {
  periodo: number;
  saldo: number;
  interes: number;
  cuota: number;
  incremento: number;
}