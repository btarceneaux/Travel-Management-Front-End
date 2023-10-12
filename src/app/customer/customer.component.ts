import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
  constructor(public router:Router, private service:CustomerService) {}

  ngOnInit(): void 
  {
    console.log("In CustomerComponent");
  }

  customerFormGroup = new FormGroup
  (
    {
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        emailAddress: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zipCode: new FormControl('')
    }
  );

  response:Response = new Response();

  successEnabled: boolean = false;
  errorEnabled: boolean = false;
  valueErrorEnabled: boolean = false;

  createCustomer()
  {

    let fName = this.customerFormGroup.get('firstName')?.value!;
    let lName = this.customerFormGroup.get('lastName')?.value!;
    let emailAddress = this.customerFormGroup.get('emailAddress')?.value!;
    let city = this.customerFormGroup.get('city')?.value!;
    let state = this.customerFormGroup.get('state')?.value!;
    let zipCode = this.customerFormGroup.get('zipCode')?.value!;
    
    let customer = new Customer(fName, lName, emailAddress);

    if((fName.length > 0) &&
       (lName.length> 0) &&
       (emailAddress.length> 0) &&
       (city.length> 0) &&
       (state.length> 0) &&
       zipCode.length> 0)
       {
        // Call the API to create the user
        this.service.createCustomer(customer).subscribe(result=>
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
  
              this.customerFormGroup.reset();
          }
          )
       }
       else
       {
        this.valueErrorEnabled = true;
       }
        
  }
}