import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
public accountForm:FormGroup =new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl()
 
})

constructor(private accountService:AccountsService, private router:Router){}

create(){
  console.log(this.accountForm.value);
  this.accountService.createaccounts(this.accountForm.value).subscribe(
(data:any)=>{
  console.log(data);
  alert("New Account Created succeccfully");
  this.router.navigateByUrl("/dashboard/accounts");
    },(err:any)=>{
      alert("Internal server Error");
}
  )
}

}
