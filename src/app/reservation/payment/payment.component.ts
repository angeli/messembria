import {Component, OnInit} from '@angular/core';
import {PaymentType} from '../../payment-type.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReservationService} from '../../reservation.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  slider = false;
  public paymentType = PaymentType;

  paymentGrp: FormGroup;

  constructor(private formBuilder: FormBuilder, public reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.paymentGrp = this.formBuilder.group({
      selectedPaymentType: [null],
    });
  }

  change(event: any): void {
    this.slider = event.checked;
    console.log(event.checked);
    console.log(this.reservationService);
  }

}
