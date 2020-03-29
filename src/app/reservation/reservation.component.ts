import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Guest} from '../guest';
import {ApartmentsService} from '../apartments.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  apartmentAndDates: FormGroup;
  // guestNames: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.apartmentAndDates = this.formBuilder.group({
      checkIn: [, Validators.required],
      checkOut: [, Validators.required],
      apartmentNum: ['', Validators.required]
    });
  }
}
