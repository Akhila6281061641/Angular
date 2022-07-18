import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule } from '@angular/router';
import { airlineroutes } from '../routing/airlineroutes';
import { AirlineComponent } from './airline.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';



@NgModule({
    declarations: [
        AirlineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(airlineroutes),
        HttpClientModule

    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AirlineComponent]
}) 
export class airlinemodule {
}
