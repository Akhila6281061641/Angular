import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { schedulegroutes } from '../routing/scheduleroutes';



@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(schedulegroutes),
    HttpClientModule
  ]
})
export class schedulemodule { }
