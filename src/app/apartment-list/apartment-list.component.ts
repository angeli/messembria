import { Component, OnInit } from '@angular/core';
import { APARTMENTS } from '../apartment-mock';
import {DashboardApartment} from '../dashboard-apartment';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartments: DashboardApartment[];

  constructor() { }

  ngOnInit(): void {
    this.apartments = APARTMENTS;
  }

}
