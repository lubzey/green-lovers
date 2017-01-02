import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.css')]
})
export class HeaderComponent implements OnInit {
  displayName;
  photoURL;
  
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.authenticationService.getCurrentUser().subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }
      this.displayName = authState.auth.displayName;
      this.photoURL = authState.auth.photoURL;
    });
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
