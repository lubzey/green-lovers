import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: require('./user-profile.component.html'),
  styles: [require('./user-profile.component.css')]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
