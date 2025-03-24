import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
 })
 export class StudentsComponent {
   students:any=[];
   card:any;
 constructor(private studentService:StudentsService){
   studentService.getstudents().subscribe(
     (data:any)=>{
       console.log(data);
       this.students=data
     },(err:any)=>{
       alert("Internal Server Error")
     }
   )
  }
}

