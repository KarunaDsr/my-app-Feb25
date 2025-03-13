import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent {
amount:number=0;
roi:number=0;
tenure:number=0;
result:number=0;

calculateemi(){
// console.log(this.amount,this.tenure,this.result);
(this.result=this.amount*this.roi*Math.pow(1+this.roi,this.tenure))/(Math.pow(1+this.roi,this.tenure)-1);
}


}
