import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Airline } from './airline.model';

@Component({
  templateUrl: './airline.component.html'
})
export class AirlineComponent {

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.GetAirlineData();
  }

  GetAirlineData() {
    this.http.get("https://localhost:44373/api/1.0/flight/airline").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.AirlineModels = res;
  }
  title = 'sample-project';
  samplename = "Akhila sakinala";

  AirlineModel: Airline = new Airline();
  AirlineModels: Array<Airline> = new Array<Airline>();

  AddAirline() {
    var airlinedto = {
      AirlineName: this.AirlineModel.airlineName,
      AirlineLogo: this.AirlineModel.airlineLogo,
      Address: this.AirlineModel.address,
      Contact: this.AirlineModel.contact


    }
    console.log(airlinedto);
    console.log(this.AirlineModel);
   this.http.post("https://localhost:44373/api/1.0/flight/airline/register",airlinedto).subscribe(res => { this.GetAirlineData(); console.log(res) }, res => console.log(res));
   this.AirlineModel = new Airline();

  }
  EditAirline(cust:Airline){
    this.AirlineModel=cust;

  }
  DeleteAirline(cust:Airline){
    console.log(cust);
    let httparms = new HttpParams().set("Id", cust.airlineId);
    let options = { params: httparms };
    this.http.delete("https://localhost:44373/api/1.0/flight/airline/deleteData",options).subscribe( res => { this.GetAirlineData(); console.log(res) }, res => console.log(res));
    //this.AirlineModels=this.arrayRemove(this.AirlineModels,Airline)

  }
  arrayRemove(arr:any,value:any){
    return arr.filter(function(sample:any){
      return sample!=value;
    });
  }


}


