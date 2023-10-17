import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../customer/customer';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Booking } from './booking';
import { Address } from './address';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent implements OnInit
{
  constructor(private customerService: CustomerService, private bookingService:BookingService, private router:Router){}
  
  customerArray:Customer[] = [];
  selected = "";

  ngOnInit(): void 
  {
    this.getAllCustomers();
  }

  bookingFormGroup = new FormGroup
  (
    {
      customerId: new FormControl(''),
      dateTime: new FormControl(''),
      numberOfPassengers: new FormControl(''),
      sourceStreetAddress: new FormControl(''),
      destinationStreetAddress: new FormControl(''),
      sourceCity: new FormControl(''),
      destinationCity: new FormControl(''),
      sourceState: new FormControl(''),
      destinationState: new FormControl(''),
      sourceZipCode: new FormControl(''),
      destinationZipCode: new FormControl('')
    }
  )

  response:Response = new Response();

  successEnabled: boolean = false;
  errorEnabled: boolean = false;

  getAllCustomers()
  {
    this.customerService.getAllCustomers(1, 10).subscribe(result =>
      {
        this.customerArray = result;
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

  createBooking()
  { 
    console.log("Inside Create Booking");
    let fCustomerId = this.bookingFormGroup.get('customerId')?.value!;
    let fNumberOfPassengers = this.bookingFormGroup.get('numberOfPassengers')?.value!;
    let fDateTime = this.bookingFormGroup.get('dateTime')?.value!;
    let fSourceStreet = this.bookingFormGroup.get('sourceStreetAddress')?.value!;
    let fDestinationStreet = this.bookingFormGroup.get('destinationStreetAddress')?.value!;
    let fSourceCity = this.bookingFormGroup.get('sourceCity')?.value!;
    let fDestinationCity = this.bookingFormGroup.get('destinationCity')?.value!;
    let fSourceState = this.bookingFormGroup.get('sourceState')?.value!;
    let fDestinationState = this.bookingFormGroup.get('destinationState')?.value!;
    let fSourceZipCode = this.bookingFormGroup.get('sourceZipCode')?.value!;
    let fDestinationZipCode = this.bookingFormGroup.get('destinationZipCode')?.value!;

    console.log(fCustomerId);
    console.log(fNumberOfPassengers);
    console.log(fDateTime);
    console.log(fSourceStreet);
    console.log(fDestinationStreet);
    console.log(fSourceCity);
    console.log(fDestinationCity);
    console.log(fSourceState);
    console.log(fDestinationState);
    console.log(fSourceZipCode);
    console.log(fDestinationZipCode);

    if((fCustomerId.length > 0) &&
       (fNumberOfPassengers.length > 0) &&
      //  (fDateTime.toString().length > 0) &&
       (fSourceStreet.length > 0) &&
       (fDestinationStreet.length > 0) &&
       (fSourceCity.length > 0) &&
       (fDestinationCity.length > 0) &&
       (fSourceState.length > 0) &&
       (fDestinationState.length > 0) &&
       (fSourceZipCode.length > 0) &&
       (fDestinationZipCode.length > 0))
    {
      
      //Every Booking Has Address And Customer so we have to create the source address, destination address and customer first.
      let mySourceAddress = new Address(fSourceStreet, fSourceCity, fSourceState, fSourceZipCode);
      let myDestinationAddress = new Address(fDestinationStreet, fDestinationCity, fDestinationState, fDestinationZipCode)
      let myCustomer = new Customer("", "", "");

      let customerIdNumber = parseInt(fCustomerId);
      myCustomer.setId(customerIdNumber);

      //Now that we have the source address, destination address and customer, we can create the booking.
      let myBooking = new Booking(new Date(fDateTime), parseInt(fNumberOfPassengers), myCustomer, mySourceAddress, myDestinationAddress);

      console.log("Now printing Booking Information.");
      console.log(myBooking);

      this.bookingService.createBooking(myBooking).subscribe(result=>
      {
        this.response = result;
        console.log(this.response);
      },
      error=>
      {
        console.log(error);
      },
      ()=>
      {
        console.log("Incoming response status");
        console.log(this.response.status);
        if(this.response.status === 200)
        {
            this.successEnabled = true;
        }
        else
        {
            this.errorEnabled = true;
        }

        this.bookingFormGroup.reset();

      }
      )
    }
  }
}