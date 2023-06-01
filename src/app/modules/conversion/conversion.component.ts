import { Component } from "@angular/core";

@Component({
  selector: "app-conversion",
  templateUrl: "./conversion.component.html",
  styleUrls: ["./conversion.component.css"],
})
export class ConversionComponent {
  titulo: string = "";
  checked: boolean = false;
  touchedtasa: boolean = false;
  tasa: number = 0;
  TotalMeses: number = 0;
  touchtasa: boolean = false;
  periodoElegido: any;
  tasaElegida: any;
  formaElegida: any;
  miTablaValue: any[] = [];
  filasAdicionales: any[] = []; 

  Periocidad = [
    { name: "Mensual" },
    { name: "Bimensual" },
    { name: "Trimestral" },
    { name: "Semestral" },
    { name: "Anual" },
  ];
  TipoTasa = [{ name: "Nominal" }, { name: "Simple" }];
  FormaPago = [{ name: "Vencida" }, { name: "Anticipada" }];

  f_Calcular() {
    this.miTablaValue = [this.miTablaValue[0]];
    var Calculando = 0;
    var Forma = this.formaElegida.name;
    var TasaE = this.tasaElegida.name;
    var Periodo = this.periodoElegido.name;
    var Tasapor = this.tasa / 100;
    var PagosAnu = 0;
    var cNomVenci = 0;
    var cEfeVenci = 0;
    var cNomAnti = 0;
    var cEfeAnti = 0;
    var Periodot = "";
    var Valn = 0;
    var NumDentr = 0;
    const pagosAnualesValues = [12, 6, 4, 2, 1];
    const periodotValues = [
      "Mensual",
      "Bimensual",
      "Trimestral",
      "Semestral",
      "Anual",
    ];

    for (let index = 0; index < 5; index++) {
      PagosAnu = pagosAnualesValues[index];
      Periodot = periodotValues[index];

      if (Forma == "Vencida") {
        Calculando = this.f_CalcularMeses(Periodo);
        if (TasaE == "Nominal") {
          cEfeVenci = Tasapor / Calculando;
        } else {
          cEfeVenci = Tasapor;
        }
        if (Calculando < PagosAnu) {
          Valn = PagosAnu / Calculando;
          NumDentr = 1 + cEfeVenci;
          cEfeVenci = this.f_CalcularRaiz(NumDentr, Valn) - 1;
        } else {
          Valn = Calculando / PagosAnu;
          NumDentr = 1 + cEfeVenci;
          cEfeVenci = this.f_CalcularPotencia(NumDentr, Valn) - 1;
        }
        cNomVenci = cEfeVenci * PagosAnu;
        cEfeAnti = cEfeVenci / (1 + cEfeVenci);
        cNomAnti = cEfeAnti * PagosAnu;
      } else {
        Calculando = this.f_CalcularMeses(Periodo);
        if (TasaE == "Nominal") {
          cEfeAnti = Tasapor / Calculando;
        } else {
          cEfeAnti = Tasapor;
        }
        if (Calculando < PagosAnu) {
          Valn = PagosAnu / Calculando;
          NumDentr = 1 - cEfeAnti;
          cEfeAnti = 1 - this.f_CalcularRaiz(NumDentr, Valn);
        } else {
          Valn = Calculando / PagosAnu;
          NumDentr = 1 - cEfeAnti;
          cEfeAnti = 1 - this.f_CalcularPotencia(NumDentr, Valn);
        }

        cEfeVenci = cEfeAnti / (1 - cEfeAnti);
        cNomVenci = cEfeVenci * PagosAnu;
        cNomAnti = cEfeAnti * PagosAnu;
      }
      var nuevaFila = {
        pagosAnuales: PagosAnu,
        periodo: Periodot,
        nominalVencida: Number(cNomVenci * 100).toFixed(2) + " % ",
        efectivaVencida: Number(cEfeVenci * 100).toFixed(2) + " % ",
        nominalAnticipada: Number(cNomAnti * 100).toFixed(2) + " % ",
        efectivaAnticipada: Number(cEfeAnti * 100).toFixed(2) + " % ",
      };
      this.miTablaValue.push({ ...nuevaFila });
    }
  }

  f_CalcularRaiz(base: number, indice: number): number {
    return Math.pow(base, 1 / indice);
  }
  f_CalcularPotencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  f_CalcularMeses(Tiempo: any): number {
    const equivalencias: { [key: string]: number } = {
      Anual: 1,
      Semestral: 2,
      Cuatrimestral: 3,
      Trimestral: 4,
      Bimensual: 6,
      Mensual: 12,
    };

    return equivalencias[Tiempo] || 0;
  }
}
