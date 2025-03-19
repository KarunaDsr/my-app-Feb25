import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
mail:any;

constructor(private _emailService:EmailService ){

  _emailService.getEmail().subscribe(
    (data:any)=>{
      console.log(data);
    this.mail=data;
     }, (err:any)=>{
      alert("Internal Server Error");
     }
    )
}

}
