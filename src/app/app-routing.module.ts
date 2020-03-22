import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {ApartmentListComponent} from './apartment-list/apartment-list.component';
import {DetailsComponent} from './details/details.component';
import {ReservationComponent} from './reservation/reservation.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: ApartmentListComponent},
  {path: 'details/:apartment_id', component: DetailsComponent},
  {path: 'reservation', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
