import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
  
})
export class ScheduleComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  ScheduleModel: Schedule = new Schedule();
  ScheduleModels: Array<Schedule> = new Array<Schedule>();
  AddSchedule(){
    var scheduledto = {

      AirlineId:Number(this.ScheduleModel.airlineId),
      Airlinename:this.ScheduleModel.airlinename,
      Username:this.ScheduleModel.username,
      Gender:this.ScheduleModel.gender,
      Seatnum:this.ScheduleModel.seatnum,
      Address:this.ScheduleModel.address,
      Contact:this.ScheduleModel.contact,
      Email:this.ScheduleModel.email,
      PNR:this.ScheduleModel.pnr

    }
    console.log(scheduledto);
    console.log(this.ScheduleModel);
   
   this.ScheduleModel = new Schedule();
  }
}
