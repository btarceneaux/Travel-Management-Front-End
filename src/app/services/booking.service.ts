import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../book-cab/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //Dependency Injection for HTTP Client
  constructor(public http:HttpClient)
  {
    
  }

  baseurl = "http://localhost:9000/api/booking-service"

  createBooking(booking:Booking):Observable<Response>
  {
    let api = this.baseurl + "/createBooking";
    return this.http.post<Response>(api, booking, {responseType:'json'});
  }

  getAllBookings():Observable<Booking[]>
  {
    let api = this.baseurl + "/bookings";
    return this.http.get<Booking[]>(api, {responseType:'json', params: new HttpParams().set('page',0)
    .set('size', 10).set('sort', 'bookingId').set('sortOrder', 'ASC')})
  }
}