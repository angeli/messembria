import {PaymentType} from './payment-type.enum';

export interface Payment {
  paid: boolean;
  type: PaymentType;
  amount: number;
}
