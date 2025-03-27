import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"
getVehicles():Observable<any>{
return this._httpClient.get(this.baseUrl);
}


getFlipkart():Observable<any>{ 
  return this._httpClient .get("https://fakestoreapi.com/products")

}
getFilteredVehicles(term:any):Observable<any>{
 return this._httpClient.get(this.baseUrl+term);

}

getSortedVehicles(column:any,order:any):Observable<any>{
  return this._httpClient.get(this.baseUrl+column+"&order="+order);
 
}

getPaginatedVehicles(limit:any,page:any):Observable<any>{
  return this._httpClient.get(this.baseUrl+limit+"&page="+page);
 
}

deleteVehicles(id:any):Observable<any>{
  return this._httpClient.delete(this.baseUrl+"/"+id);
 
}

createVehicle(data:any):Observable<any>{
  return this._httpClient.post(this.baseUrl,data)
}

getVehicle(id:any):Observable<any>{
  return this._httpClient.get(this.baseUrl+"/"+id);
}

updateVehicle(id:any,data:any):Observable<any>{
  return this._httpClient.put(this.baseUrl+"/"+id,data);
}
}