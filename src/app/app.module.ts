import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookCabComponent } from './book-cab/book-cab.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './services/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookCabComponent,
    ViewBookingsComponent,
    CustomerComponent,
    ViewCustomersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
