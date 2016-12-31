import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2/index";
import { firebaseConfig } from "../environments/firebase.config";

import { AppRoutingModule } from './app.routing';
import { PlantsComponent } from './plants/plants.component';
import { UsersComponent } from './users/users.component';
import { DataService } from './shared/services/data.service';


@NgModule({
  declarations: [
    AppComponent
    // PlantsComponent,
    // UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
