import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetBookingData();
  }
  GetBookingData() {
    this.http.get("https://localhost:44306/api/1.0/flight/booking/getBookingData").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.BookingModels = res;
  }
  BookingModel: Booking = new Booking();
  BookingModels: Array<Booking> = new Array<Booking>();
  Addbooking(){
    var bookingdto = {

      AirlineId:Number(this.BookingModel.airlineId),
      Airlinename:this.BookingModel.airlinename,
      Username:this.BookingModel.username,
      Gender:this.BookingModel.gender,
      Seatnum:this.BookingModel.seatnum,
      Address:this.BookingModel.address,
      Contact:this.BookingModel.contact,
      Email:this.BookingModel.email,
      //PNR:this.BookingModel.pnr

    }
    console.log(bookingdto);
    console.log(this.BookingModel);
   this.http.post("https://localhost:44306/api/1.0/flight/booking/BookingTicket",bookingdto).subscribe(res => { this.GetBookingData(); console.log(res) }, res => console.log(res));
   this.BookingModel = new Booking();
  }
  EditBooking(cust:Booking){
    this.BookingModel=cust;

  }
  DeleteBooking(cust:Booking){
    console.log(cust);
    let httparms = new HttpParams().set("Id", cust.airlineId);
    let options = { params: httparms };
    this.http.delete("https://localhost:44306/api/1.0/flight/booking/Cancel",options).subscribe( res => { this.GetBookingData(); console.log(res) }, res => console.log(res));
    //this.AirlineModels=this.arrayRemove(this.AirlineModels,Airline)

  }
  arrayRemove(arr:any,value:any){
    return arr.filter(function(sample:any){
      return sample!=value;
    });
  }


}
