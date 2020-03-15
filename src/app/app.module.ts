import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApartmentComponent} from './apartment/apartment.component';
import {ReservationDetailsComponent} from './reservation-details/reservation-details.component';
import {RoomDetailsComponent} from './room-details/room-details.component';
import {ApartmentDetailsComponent} from './apartment-details/apartment-details.component';
import {ApartmentListComponent} from './apartment-list/apartment-list.component';

import {registerLocaleData} from '@angular/common';
import localeBg from '@angular/common/locales/bg';

registerLocaleData(localeBg, 'bg-BG');

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReservationComponent} from './reservation/reservation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ApartmentComponent,
    ReservationDetailsComponent,
    RoomDetailsComponent,
    ApartmentDetailsComponent,
    ApartmentListComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
