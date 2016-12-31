import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
