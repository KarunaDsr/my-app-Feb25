import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
public studentForm:FormGroup =new FormGroup({
  name:new FormControl(),
  city:new FormControl(),
  email:new FormControl(),
  phone:new FormControl(),
  dob:new FormControl(),
  school_name:new FormControl(),
  school_city:new FormControl(),
  school_pin:new FormControl(),
})
id:number=0;
constructor(private studentService:StudentsService, private router:Router, private activateroute:ActivatedRoute ) {
activateroute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;
  },(err:any)=>{
    alert("Internal Server Error")
  }
)
}
create(){

  if(this.id){
    console.log(this.studentForm.value);
    this.studentService.updatestudents(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle Recors updated Successfully")
        this.router.navigateByUrl("/dashboard/students");
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }else{
    console.log(this.studentForm.value);
  this.studentService.createstudents(this.studentForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("New Student Created Successfully");
      this.router.navigateByUrl("/dashboard/student");
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
  }
  
}
}
