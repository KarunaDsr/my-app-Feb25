import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
id:number=0;
vehicle:any='';
constructor(private activatedRoute:ActivatedRoute, private _vehicleService:VehicleService){
activatedRoute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;
    console.log(this.id);
  },(err:any)=>{
    alert("Internal server Error");
  }
)
_vehicleService.getVehicle(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicle=data;
  },(err:any)=>{
    alert("Internal server Error");
  }
)
}
}
