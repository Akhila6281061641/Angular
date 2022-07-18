import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { bookingroutes } from '../routing/bookingroutes';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(bookingroutes),
    HttpClientModule
  ]
})
export class bookingmodule { }
