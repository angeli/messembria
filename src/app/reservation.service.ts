import {Injectable} from '@angular/core';
import {Payment} from './payment';
import {PaymentType} from './payment-type.enum';
import {Guest} from './guest';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apartment: number;
  arrival: Date;
  checkIn: Date;
  checkOut: Date;
  guests: Guest[] = [{
    name: '',
    family: ''
  }];
  payment: Payment = {
    paid: false,
    type: PaymentType.unknown,
    amount: 0
  };
  who: string;
  extra: string;

  constructor() {
  }
}
