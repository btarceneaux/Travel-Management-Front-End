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
  bookingArray:Booking[] = [];
  
  response:Response | undefined;

  pageFilterObject =
  {
    "pageNumber":1,
    "pageSize":5
  }

  selectedNumbersPerPage(value:string) 
  {
   this.pageFilterObject.pageSize = parseInt(value) ;
   this.getAllBookings();
  }

  onPrevious()
  {
    if(this.pageFilterObject.pageNumber > 1)
    {
      this.pageFilterObject.pageNumber--;
      this.getAllBookings();
    }
  }

  onNext()
  {
    this.pageFilterObject.pageNumber++;
    this.getAllBookings();
  }

  ngOnInit(): void
  {
    this.getAllBookings();
  }

  constructor(private bookingService:BookingService, private router:Router)
  {
    
  }

  openModal()
  {
    const modalDiv = document.getElementById("bookingModal");
    if(modalDiv != null)
    {
      modalDiv.style.display = 'block';
    }
  }

  closeModal()
  {
    const modalDiv = document.getElementById("bookingModal");
    if(modalDiv != null)
    {
      modalDiv.style.display = 'none';
    }
  }

  deleteBookingRecord(bookingId:string)
  {
    this.bookingService.deleteBooking(bookingId).subscribe(result=>
      {
        this.response = result;
      },
      error=>
      {
        console.log(error);
      },
      ()=>
      {
        location.reload();
        console.log("Record Successfully Deleted.");
      }
      )
  }

  getAllBookings()
  {
    this.bookingService.getAllBookings(this.pageFilterObject.pageNumber, this.pageFilterObject.pageSize).subscribe(result=>
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
      });
    }
  
  }