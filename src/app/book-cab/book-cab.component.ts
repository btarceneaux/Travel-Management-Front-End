import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../customer/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent implements OnInit
{
  constructor(private customerService: CustomerService, private router:Router){}
  
  customerArray:Customer[] = [];
  selected = "";

  ngOnInit(): void 
  {
    this.getAllCustomers();
  }

  getAllCustomers()
  {
    this.customerService.getAllCustomers().subscribe(result =>
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

}
