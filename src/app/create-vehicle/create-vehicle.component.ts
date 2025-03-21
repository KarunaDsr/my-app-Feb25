import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
public vehicleForm:FormGroup =new FormGroup({
  Vehicle:new FormControl(),
  color:new FormControl(),
  cost:new FormControl(),
  fuel:new FormControl(),
  image:new FormControl(),
  manufacturer:new FormControl(),
  type:new FormControl(),
  tyres:new FormControl(),
})

constructor(private vehicleService:VehicleService, private router:Router ) {}

create(){
  console.log(this.vehicleForm.value);
  this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New Vehicle Created Successfully");
      this.router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}

}
