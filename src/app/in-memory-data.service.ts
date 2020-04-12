import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const apartments = [
      {id: 12, people: 2},
      {id: 13, people: 3},
      {id: 14, people: 2},
      {id: 15, people: 4},
      {id: 16, people: 3},
      {id: 17, people: 4},
      {id: 18, people: 2},
    ];

    const guests = [
      {id: 1, name: 'Jason', family: 'Vincent', apartments_id: 12},
      {id: 2, name: 'Cristina', family: 'Masten', apartments_id: 13},
      {id: 3, name: 'Dinodas', family: 'Diggle', apartments_id: 15},
      {id: 4, name: 'Maura', family: 'Oldbuck', apartments_id: 17},
      {id: 5, name: 'Tomba', family: 'Brockhouse', apartments_id: 18},
    ];


    const bookings = [
      {id: 1, guests_id: 1, apartments_id: 12, start: new Date('2020-04-13 12:00:00'), end: new Date('2020-04-20 12:00:00')},
      {id: 2, guests_id: 2, apartments_id: 13, start: new Date('2020-04-13 12:00:00'), end: new Date('2020-04-20 12:00:00')},
      {id: 3, guests_id: 3, apartments_id: 15, start: new Date('2020-04-10 12:00:00'), end: new Date('2020-04-24 12:00:00')},
      {id: 4, guests_id: 4, apartments_id: 17, start: new Date('2020-04-10 12:00:00'), end: new Date('2020-04-24 12:00:00')},
      {id: 5, guests_id: 5, apartments_id: 18, start: new Date('2020-04-10 12:00:00'), end: new Date('2020-04-24 12:00:00')},
    ];

    return {apartments, guests, bookings};
  }

}
