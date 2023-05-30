import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  titulo:string='';
  checkedDeiaj: boolean=false;
  checkedDejai: boolean=false;
  checkedDeiaiant: boolean=false;


  onSwitchChange(nombreControl:any){
    if(nombreControl === 'checkedDeiaj'){
      this.checkedDejai=false;
      this.checkedDeiaiant=false;
    }
    if(nombreControl === 'checkedDejai'){
      this.checkedDeiaj=false;
      this.checkedDeiaiant=false;
    }
    if(nombreControl === 'checkedDeiaiant'){
      this.checkedDeiaj=false;
      this.checkedDejai=false;
    }
  }
}
