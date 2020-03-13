import {DashboardApartment} from './dashboard-apartment';
import {ApartmentStatus} from './apartment-status.enum';

export const APARTMENTS: DashboardApartment[] = [
  {
    id: 12,
    guest: {name: 'Jason', family: 'Vincent'},
    people: 2,
    dates: {start: new Date('2020-03-13 12:00:00'), end: new Date('2020-03-20 12:00:00')},
    status: ApartmentStatus.busy
  },
  {
    id: 13,
    guest: {name: 'Cristina', family: 'Masten'},
    people: 3,
    dates: {start: new Date('2020-03-13 12:00:00'), end: new Date('2020-03-20 12:00:00')},
    status: ApartmentStatus.busy
  },
  {
    id: 14,
    guest: null,
    people: null,
    dates: null,
    status: ApartmentStatus.free
  },
  {
    id: 15,
    guest: {name: 'Dinodas', family: 'Diggle'},
    people: 4,
    dates: {start: new Date('2020-03-10 12:00:00'), end: new Date('2020-03-24 12:00:00')},
    status: ApartmentStatus.busy
  },
  {
    id: 16,
    guest: null,
    people: null,
    dates: null,
    status: ApartmentStatus.free
  },
];
