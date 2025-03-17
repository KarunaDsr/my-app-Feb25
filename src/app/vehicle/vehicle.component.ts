import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
Vehicles: any;

constructor(private _vehicleservice:VehicleService){
  _vehicleservice.getVehicles().subscribe(
    (data:any)=>{
      console.log(data);
    this.Vehicles=data;
     }, (err:any)=>{
      alert("Internal Server Error");
     }
     
  )
}
}
