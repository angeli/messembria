import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DashboardApartment} from './dashboard-apartment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private apartment = new Subject();

  stream$ = this.apartment.asObservable();

  constructor() {
  }

  show(apartment: DashboardApartment) {
    this.apartment.next(apartment);
  }
}
