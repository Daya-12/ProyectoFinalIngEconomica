import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EquivalenciaTasasComponent } from './modules/equivalencia-tasas/equivalencia-tasas.component';
import { AmortizacionComponent } from './modules/amortizacion/amortizacion.component';
import { CapitalizacionComponent } from './modules/capitalizacion/capitalizacion.component';
import { InteresComponent } from './modules/interes/interes.component';
import { ConversionComponent } from './modules/conversion/conversion.component';
import { DescuentoComponent } from './modules/descuento/descuento.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AnualidadOrdinariaComponent } from './modules/anualidad-ordinaria/anualidad-ordinaria.component';
import { AnualidadAnticipadaComponent } from './modules/anualidad-anticipada/anualidad-anticipada.component';
import { AnualidadPerpetuaComponent } from './modules/anualidad-perpetua/anualidad-perpetua.component';

@NgModule({
  declarations: [
    AppComponent,
    AmortizacionComponent,
    InteresComponent,
    CapitalizacionComponent,
    ConversionComponent,
    DescuentoComponent,
    EquivalenciaTasasComponent,
    InicioComponent,
    AnualidadOrdinariaComponent,
    AnualidadAnticipadaComponent,
    AnualidadPerpetuaComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    MenuModule,
    InputSwitchModule,
    RadioButtonModule,
    MultiSelectModule,
    DropdownModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
],schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
