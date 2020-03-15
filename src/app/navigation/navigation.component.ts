import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  selectedTab: 0;
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  constructor() {
  }

  tabClick(event) {
    this.selectedTab = event.index;
    console.log(event);
    console.log('Index:', this.selectedTab);
  }

  ngOnInit(): void {
  }

}
