import { Customer } from "../customer/customer";
import { Address } from "./address";

export class Booking
{
    bookingId = null;
    bookingDateAndTime:Date;
    numberOfPassengers:number;
    relatedCustomer:Customer;
    sourceAddress:Address;
    destinationAddress:Address;

    constructor(bookingDateAndTime:Date, numberOfPassengers:number, 
        relatedCustomer:Customer, sourceAddress:Address, destinationAddress:Address)
        {
            this.bookingDateAndTime = bookingDateAndTime;
            this.numberOfPassengers = numberOfPassengers;
            this.relatedCustomer = relatedCustomer;
            this.sourceAddress = sourceAddress;
            this.destinationAddress = destinationAddress;
        }

}