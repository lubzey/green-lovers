import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { PlantInstance } from './../models/plant.model';
import { User } from './../models/user.model';

import { UsersService } from './users.service';
import { PlantInstancesService } from './plant-instances.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SearchService {

  constructor(
    private af: AngularFire,
    private usersService: UsersService,
    private plantInstancesService: PlantInstancesService) { }

  search(term: string) {
     let results = this.plantInstancesService.searchPlants(term)
     .merge(this.usersService.searchUsers(term));

    return results;
  }
}
