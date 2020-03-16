import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Guest} from '../guest';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  roomDates: FormGroup;
  guestNames: FormGroup;

  guests: Guest[] = [{name: '', family: ''}];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.roomDates = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  addGuest() {
    this.guests.push({name: '', family: ''});
  }

  removeGuest(index) {
    this.guests.splice(index, 1);
  }

}
