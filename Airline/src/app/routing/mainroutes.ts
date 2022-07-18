

import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";


export const Mainroutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Airline',loadChildren:()=>import('../airline/airline.module').then(m=>m.airlinemodule)},
  {path:'Booking',loadChildren:()=>import('../booking/booking.module').then(m=>m.bookingmodule)},
  {path:'Search',loadChildren:()=>import('../search/search.module').then(m=>m.searchmodule)},
  {path:'schedule',loadChildren:()=>import('../schedule/schedule.module').then(m=>m.schedulemodule)}
  
];


