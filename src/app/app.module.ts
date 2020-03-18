import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {registerLocaleData} from '@angular/common';
import localeBg from '@angular/common/locales/bg';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavigationComponent} from './navigation/navigation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApartmentComponent} from './apartment/apartment.component';
import {ReservationDetailsComponent} from './reservation-details/reservation-details.component';
import {RoomDetailsComponent} from './room-details/room-details.component';
import {ApartmentDetailsComponent} from './apartment-details/apartment-details.component';
import {ApartmentListComponent} from './apartment-list/apartment-list.component';
import {ReservationComponent} from './reservation/reservation.component';
import {DetailsComponent} from './details/details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


registerLocaleData(localeBg, 'bg-BG');

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
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
