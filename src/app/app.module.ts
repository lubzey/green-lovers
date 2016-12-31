import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app-component/app.component';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { UserGardenComponent } from './user-profile/user-garden/user-garden.component';
import { UserPhotosComponent } from './user-profile/user-photos/user-photos.component';
import { PlantsWikiComponent } from './plants-wiki/plants-wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    UserProfileComponent,
    UserEditComponent,
    UserGardenComponent,
    UserPhotosComponent,
    PlantsWikiComponent,
=======
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
>>>>>>> 9e5646e1453902af0b5f2d2ee02c9070f18e4944
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
