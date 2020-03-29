import {Component, OnInit} from '@angular/core';
import {DashboardApartment} from '../dashboard-apartment';
import {ApartmentsService} from '../apartments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public apartment: DashboardApartment;

  constructor(private apartmentsService: ApartmentsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('apartment_id');

    console.log(id);

    this.apartmentsService.get(id)
      .subscribe(apartment => this.apartment = apartment);
  }

}
