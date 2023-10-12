import { Component, OnInit } from '@angular/core';
import { Booking } from '../book-cab/booking';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit
{
  currentPage: number =1;
  bookingArray:Booking[] = [];
  response:Response | undefined;
  i: number = 0;

  ngOnInit(): void
  {
    this.getAllBookings();
  }

  constructor(private bookingService:BookingService, private router:Router)
  {
    
  }

  getAllBookings()
  {
    this.bookingService.getAllBookings().subscribe(result=>
      {
        this.bookingArray = result;
      },
      error=>
      {
        console.log(error);
      },
      ()=>
      {
        console.log("Finished Loading Information.");
      }
      )
  }
}