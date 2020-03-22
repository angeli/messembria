import {Component, OnInit} from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public apartment: DashboardApartment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
