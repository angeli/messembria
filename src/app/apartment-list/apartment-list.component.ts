import { Component, OnInit } from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartments: DashboardApartment[];

  constructor(private apartmentsService: ApartmentService) {
  }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentsService.all()
      .subscribe(apartments => this.apartments = apartments);
  }

}
