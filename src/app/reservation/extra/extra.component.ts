import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../reservation.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor(public reservationService: ReservationService) {
  }

  ngOnInit(): void {
  }

}
