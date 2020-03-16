import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  selected = new FormControl(2);

  constructor(private detailsService: DetailsService) {
    detailsService.stream$.subscribe(apartment => {
      console.log('Showing:', apartment);
      console.log(this);
      this.selected.setValue(1);
    });
  }

  ngOnInit(): void {
  }

}
