import {Component, Input, OnInit} from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  @Input() apartment: DashboardApartment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
