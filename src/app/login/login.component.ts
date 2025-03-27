import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public loginForm:FormGroup=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
})
constructor(private loginservice:LoginService, private router:Router){}
login(){
  console.log(this.loginForm.value);
  this.loginservice.login(this.loginForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Login Successful");
      sessionStorage.setItem('token',data.token)
      this.router.navigateByUrl("/dashboard")
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
  
}

}


