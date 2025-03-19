import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _httpclient:HttpClient) { }
  getEmail():Observable<any>{
    return this._httpclient.get("https://jsonplaceholder.typicode.com/todos")
    }

}
