import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  term:string='';
constructor(private accountsService:AccountsService){
 accountsService.getaccounts().subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}


filter(){
     this.accounts.getFilteredaccounts(this.term).subscribe(
       (data:any)=>{
         console.log(data);
         this.accounts=data;
       },(err:any)=>{
         alert("Internal Server Error!");
       }
   )
   }
column:string='';
order:string='';

sort(){
  this.accountsService.getSortedaccounts(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
loadaccounts(){
  this.accountsService.getaccounts().subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
      console.log(this.accounts);
    },(err:any)=>{
      alert("Internal server Error");
    }

  )
}
delete(id:any){
  if(confirm("Are you Sure to delete?")==true){
    this.accountsService.deleteaccounts(id).subscribe(
      (data:any)=>{
        alert("Record Deleted Successfully!")
        this.loadaccounts();
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
  this.accountsService.getPaginatedaccounts(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal server Error!")
    }
  )
}

}
