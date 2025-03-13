import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  // two way data binding
  mobile:string='+91';

  // property binding
  isData:Boolean=true;

// event binding
click(){
  alert("Hello");
}

submit(){
  alert("Hi");
}
// interpolation binding
age:number=35;
name:string='Karuna';


num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=this.num1+this.num2;
  console.log(this.result);
}

}
