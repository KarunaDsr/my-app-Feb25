import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;

  states:string[]=['Andhra Pradesh','Karnataka','Kerala','Maharastra','Tamilnadu','Telangana'];

products:any=[
  {name:'pen',price:10,rating:3.7},
  {name:'book',price:50,rating:2.5},
  {name:'shirt',price:990,rating:4.6},
  {name:'shoes',price:1600,rating:2.9},
  {name:'bike',price:200000,rating:4.5},
  {name:'car',price:1600000,rating:4.2}
]

newDate:any=new Date();

}
