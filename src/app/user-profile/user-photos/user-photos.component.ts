import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-photos',
  template: require('./user-photos.component.html'),
  styles: [require('./user-photos.component.css')]
})
export class UserPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
