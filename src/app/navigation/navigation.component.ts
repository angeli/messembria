import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navLinks = [
    {path: 'dashboard', label: 'Табло'},
    {path: 'details/0', label: 'Детайли'},
    {path: 'reservation', label: 'Резервация'},
    {path: 'calendar', label: 'Календар'},
    {path: 'report', label: 'Справки'},
    {path: 'admin', label: 'Админ'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
