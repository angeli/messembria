import {Interval} from './interval';
import {ApartmentStatus} from './apartment-status.enum';
import {Guest} from './guest';

export interface DashboardApartment {
  id: number;
  guest?: Guest;
  people?: number;
  dates?: Interval;
  status: ApartmentStatus;
}
