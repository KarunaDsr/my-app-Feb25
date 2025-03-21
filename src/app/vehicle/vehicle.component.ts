import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
Vehicles: any=[]

constructor(private _vehicleservice:VehicleService){
  this.loadVehicles();
  _vehicleservice.getVehicles().subscribe(
    (data:any)=>{
      console.log(data);
    this.Vehicles=data;
     }, (err:any)=>{
      alert("Internal Server Error");
     }
     
  )
}

 filter(){
   this._vehicleservice.getFilteredVehicles(this.term).subscribe(
     (data:any)=>{
       console.log(data);
       alert('hello')
       this.Vehicles=data;
     },(err:any)=>{
       alert("Internal Server Error!");
     }
 )
 }

column:string='';
order:string='';

sort(){
  this._vehicleservice.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.Vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
}

loadVehicles(){
  this._vehicleservice.getVehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.Vehicles=data;
      console.log(this.Vehicles);
    },(err:any)=>{
      alert("Internal server Error");
    }

  )
}
delete(id:any){
  if(confirm("Are you Sure to delete?")==true){
    this._vehicleservice.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("Record Deleted Successfully!")
        this.loadVehicles();
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }else{
    alert("You have cancelled")
  }
  
}

limit:string='';
page:string='';
pagination(){
  this._vehicleservice.getPaginatedVehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.Vehicles=data;
    },(err:any)=>{
      alert("Internal server Error!")
    }
  )
}

}
