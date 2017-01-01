import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { PlantInstance } from './../models/plant.model';
import { User } from './../models/user.model';

import { UsersService } from './users.service';
import { PlantInstancesService } from './plant-instances.service';

@Injectable()
export class SearchService {

  constructor(
    private af: AngularFire,
    private usersSearch: UsersService,
    private plantInstancesService: PlantInstancesService) { }

  search(term: string) {
    return this.usersSearch.searchUsers(term);
      // .concat(this.plantInstancesService.getPlants());
  }
}
