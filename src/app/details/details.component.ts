import {Component, OnInit} from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public apartment: DashboardApartment;

  constructor(private detailsService: DetailsService) {
    detailsService.stream$.subscribe((apartment: DashboardApartment) => {
      console.log('Received: ', apartment);
      console.log(this);
      this.apartment = apartment;
    });
  }

  ngOnInit(): void {
  }

}
