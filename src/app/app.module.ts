import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

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

import { SearchService } from './shared/services/search.service';
import { PlantInstancesService } from './shared/services/plant-instances.service';
import { AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";

import { PlantsOnlyPipe } from './shared/pipes/plants-only.pipe';
import { UsersOnlyPipe } from './shared/pipes/users-only.pipe';

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
    UsersOnlyPipe,
    PlantsOnlyPipe,
    UsersOnlyPipe,
],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [PlantInstancesService, SearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }

