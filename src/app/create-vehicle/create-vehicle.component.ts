import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

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
id:number=0;
constructor(private vehicleService:VehicleService, private router:Router, private activateroute:ActivatedRoute ) {
activateroute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;
  },(err:any)=>{
    alert("Internal Server Error")
  }
)

if(this.id){
vehicleService.getVehicle(this.id).subscribe(
  (data:any)=>{
    this.vehicleForm.patchValue(data);
  },(err:any)=>{
    alert("Internal Server Error")
  }
)
}
}

create(){

  if(this.id){
    console.log(this.vehicleForm.value);
    this.vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle Recors updated Successfully")
        this.router.navigateByUrl("/dashboard/vehicle");
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }else{
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

}
