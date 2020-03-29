import {Component, OnInit} from '@angular/core';
import {ApartmentsService} from '../../apartments.service';

@Component({
  selector: 'app-apartment-dates',
  templateUrl: './apartment-dates.component.html',
  styleUrls: ['./apartment-dates.component.css']
})
export class ApartmentDatesComponent implements OnInit {
  ids: number[];

  constructor(private apartmentsService: ApartmentsService) {
  }

  ngOnInit(): void {
    this.apartmentsService.all()
      .subscribe(apartments => this.ids = apartments.map(apartment => apartment.id));
  }

}
