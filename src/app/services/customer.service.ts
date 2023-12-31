import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //Dependency Injection for HTTP Client
  constructor(public http:HttpClient)
  {
    
  }

  baseurl = "http://localhost:9000/api/booking-service"

  customer:Customer[] = [];

  getAllCustomers(pageNumber:number = 1, pageSize:number = 1):Observable<Customer[]>
  {
    let api = this.baseurl + "/customer";

    return this.http.get<Customer[]>(api, {responseType:'json', params: new HttpParams().set('page',pageNumber -1)
    .set('size', pageSize).set('sort','lastName').set('sortOrder','ASC')})
  } 

  createCustomer(customer:Customer):Observable<Response>
  {
    let api = this.baseurl + "/customer";
    return this.http.post<Response>(api, customer, {responseType:'json'});
  }

  deleteCustomer(customerId:String):Observable<Response>
  {
    let api = this.baseurl + "/customer/" + customerId;
    return this.http.delete<Response>(api);
  }
}
