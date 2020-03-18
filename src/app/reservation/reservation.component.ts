import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Guest} from '../guest';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  apartmentAndDates: FormGroup;
  // guestNames: FormGroup;

  guests: Guest[] = [{name: '', family: ''}];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.apartmentAndDates = this.formBuilder.group({
      checkIn: [{disabled: true}, Validators.required],
      checkOut: [{disabled: true}, Validators.required],
      apartmentNum: ['', Validators.required]
    });
  }

  addGuest() {
    this.guests.push({name: '', family: ''});
  }

  removeGuest(index) {
    this.guests.splice(index, 1);
  }

}
