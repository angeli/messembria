import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
