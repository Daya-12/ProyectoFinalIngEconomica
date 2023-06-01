import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  items: MenuItem[] = [];
  itemsMenuControl=[{'name':'interes', 'value':false}, {'name':'conversionTasas', 'value':false}, {'name':'equivalenciaTasas', 'value':false}, {'name':'descuento', 'value':false}, 
        {'name':'ordinarias', 'value':false}, {'name':'anticipadas', 'value':false} , {'name':'perpetuas', 'value':false} ,{'name':'amortizacion', 'value':false}, {'name':'capitalizacion', 'value':false}];

  ngOnInit() {
    this.items = [
        {
            label: 'Interés',
            icon: 'pi pi-percentage',
            command: () => {
              this.controlItemsMenu('interes');
            }
        },
        {
            label: 'Tasas',
            icon: 'pi pi-sort-numeric-up-alt',
            items: [
              {
                  label: 'Conversión',
                  icon: 'pi pi-money-bill',
                  command: () => {
                    this.controlItemsMenu('conversionTasas');
                  }
              },
              {
                  label: 'Equivalencia',
                  icon: 'pi pi-arrow-right-arrow-left',
                  command: () => {
                    this.controlItemsMenu('equivalenciaTasas'); 
                  }
              }
          ]
        },
        {
          label: 'Descuento bancario',
          icon: 'pi pi-chart-bar',
          command: () => { 
            this.controlItemsMenu('descuento'); 
          }
        },
        {
          label: 'Anualidades',
          icon: 'pi pi-chart-line',
          items: [
            {
              label: 'Ordinarias',
              icon: 'pi pi-calendar-plus',
              command: () => { 
                this.controlItemsMenu('ordinarias'); 
              }
            },
            {
              label: 'Anticipadas',
              icon: 'pi pi-calendar-minus',
              command: () => { 
                this.controlItemsMenu('anticipadas'); 
              }
            },
            {
              label: 'Perpetua',
              icon: 'pi pi-calendar-times',
              command: () => { 
                this.controlItemsMenu('perpetuas'); 
              }
            }
          ]
        },
        {
          label: 'Amortización',
          icon: 'pi pi-calculator',
          command: () => { 
            this.controlItemsMenu('amortizacion'); 
          }
        },
        {
          label: 'Capitalización',
          icon: 'pi pi-dollar',
          command: () => { 
            this.controlItemsMenu('capitalizacion'); 
          }
        }
    ];
  }

  controlItemsMenu(nameControlActive:string){
    this.itemsMenuControl.forEach(element => {
      if(element.name==nameControlActive){
        element.value=true;
      }else{
        element.value=false;
      }
    });
  }


  validateActiveControl(nameControl:string): boolean{
    return this.itemsMenuControl.findIndex(x=>x.name==nameControl && x.value) >= 0 ? true : false;
  }
}
