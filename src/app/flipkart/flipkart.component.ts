import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkart:any[]=[];
constructor(private _flipkartService:VehicleService){
  _flipkartService.getFlipkart().subscribe(
    (data:any)=>{
      console.log(data);
    this.flipkart=data;
     }, (err:any)=>{
      alert("Internal Server Error");
     }
    )
}
}
