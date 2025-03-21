import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private httpClient: HttpClient) {}

  getaccounts(): Observable<any> {
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }

getFilteredaccounts(term:any): Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
}

getSortedaccounts(column:any,order:any): Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
}

getPaginatedaccounts(limit:any,page:any):Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
 
}

deleteaccounts(id:any):Observable<any>{
  return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
 
}

createaccounts(data:any):Observable<any>{
  return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
}

}
   

