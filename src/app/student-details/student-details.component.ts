import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
id:number=0;
student:any='';
constructor(private activatedRoute:ActivatedRoute, private studentService:StudentsService){
activatedRoute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;
    console.log(this.id);
  },(err:any)=>{
    alert("Internal server Error");
  }
)
studentService.getstudent(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.student=data;
  },(err:any)=>{
    alert("Internal server Error");
  }
)
}
}
