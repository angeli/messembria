import {Component, Input, OnInit} from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  @Input() apartment: DashboardApartment;

  constructor(private detailsService: DetailsService) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.detailsService.show(this.apartment);
  }

}
