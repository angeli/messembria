import {Component, OnInit} from '@angular/core';
import {PaymentType} from '../../payment-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  slider = false;
  public paymentType = PaymentType;

  paymentGrp: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.paymentGrp = this.formBuilder.group({
      selectedPaymentType: [null],
    });
  }

  change(event: any): void {
    this.slider = event.checked;
    console.log(event.checked);
  }

}
