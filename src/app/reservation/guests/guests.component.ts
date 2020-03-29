import {Component, OnInit} from '@angular/core';
import {Guest} from '../../guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  guests: Guest[] = [{name: '', family: ''}];

  constructor() {
  }

  ngOnInit(): void {
  }

  addGuest() {
    this.guests.push({name: '', family: ''});
  }

  removeGuest(index) {
    // @todo ask for confirmation if the guest is not empty

    this.guests.splice(index, 1);
  }
}
