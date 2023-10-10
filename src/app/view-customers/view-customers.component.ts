import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../customer/customer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit
{
  currentPage: number = 1;
  customerArray:Customer[] = [];
  response:Response | undefined;
  i: number = 0;

  ngOnInit(): void 
  {
    this.getAllCustomers();
  }

  constructor(private customerService: CustomerService, private router:Router){}

  deleteCustomer(id:number)
  {
    if(id != null)
    {
      this.customerService.deleteCustomer(String(id)).subscribe(result=>
        
        {
          console.log(result);
        },
        error=>
        {
          console.log(error);
        },
        ()=>
        {
          location.reload();
          console.log("Customer Successfully Deleted.");
        }
        )
    }
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
function res(value: Response, index: number): unknown {
  throw new Error('Function not implemented.');
}

function data(value: FormData): FormData | PromiseLike<FormData> {
  throw new Error('Function not implemented.');
}

