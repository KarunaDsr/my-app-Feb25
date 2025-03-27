import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
 })
 export class StudentsComponent {
   student:any=[];
   card:any;
   term:string='';

 constructor(private studentService:StudentsService){
  this.loadStudents();
   studentService.getstudents().subscribe(
     (data:any)=>{
       console.log(data);
       this.student=data
     },(err:any)=>{
       alert("Internal Server Error")
     }
   )
  }
  filter(){
    this.studentService.getFilteredstudents(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }

  column:string='';
  order:string='';

  sort(){
    this.studentService.getSortedstudents(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  loadStudents(){
    this.studentService.getstudents().subscribe(
      (data:any)=>{
        this.student=data;
        console.log(this.student);
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }

  delete(id:any){
    if(confirm("Are you Sure to delete?")==true){
      this.studentService.deletestudents(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully!")
          this.loadStudents();
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
      alert("You have cancelled")
    }

}
 }
