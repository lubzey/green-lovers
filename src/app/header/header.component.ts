import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SideMenuComponent } from './../side-menu/side-menu.component';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.css')]
})
export class HeaderComponent implements OnInit {

@Output() sideMenuEvent = new EventEmitter();

private sideMenu;

  constructor() { }

  ngOnInit() {
  }

  callToSideMenu(){
    this.sideMenuEvent.emit(null)
  }

}
