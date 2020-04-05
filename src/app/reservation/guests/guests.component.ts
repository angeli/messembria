import {Component, OnInit} from '@angular/core';
import {Guest} from '../../guest';
import {ReservationService} from '../../reservation.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  guests: Guest[] = [{name: '', family: ''}];

  constructor(public reservationService: ReservationService) {
  }

  ngOnInit(): void {
  }

  addGuest() {
    this.reservationService.guests.push({name: '', family: ''});
  }

  removeGuest(index) {
    // @todo ask for confirmation if the guest is not empty

    this.reservationService.guests.splice(index, 1);
  }
}
