import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { searchroutes } from '../routing/searchroutes';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(searchroutes),
    HttpClientModule
  ]
})
export class searchmodule { }
