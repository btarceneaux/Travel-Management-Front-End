import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCabComponent } from './book-cab/book-cab.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = 
[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"bookCab", component:BookCabComponent},
  {path:"customer", component:CustomerComponent},
  {path:"viewBookings", component:ViewBookingsComponent},
  {path:"viewCustomers", component:ViewCustomersComponent},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
