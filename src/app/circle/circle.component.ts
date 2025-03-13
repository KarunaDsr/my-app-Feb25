import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
radius:number=0;
result:number=0;


calculateArea(){
  console.log(this.radius);
  this.result=Math.PI*Math.pow(this.radius,2);
  console.log(this.result);
}

calculatePerimeter(){
  console.log(this.radius);
  this.result=2*Math.PI*this.radius;
  console.log(this.result);
}
}
