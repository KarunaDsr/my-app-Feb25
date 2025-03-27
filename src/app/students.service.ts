import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpclient:HttpClient) { }
  getstudents():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }

  getFilteredstudents(term:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+term);
  }

  getSortedstudents(column:any,order:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+column+"&order="+order)
  }

  getPaginatedstudents(limit:any,page:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+limit+"&page="+page);
   
  }
  
  deletestudents(id:any):Observable<any>{
    return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+id)
   
  }
  
  createstudents(data:any):Observable<any>{
    return this._httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
  }

  updatestudents(id:any,data:any):Observable<any>{
    return this._httpclient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student" +id,data);

  }

  getstudent(id:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+id);
  }
  
  }

