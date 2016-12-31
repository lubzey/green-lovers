import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlantInstancesService } from '../shared/services/plant-instances.service';
import { UsersService } from '../shared/services/users.service';


import { PlantInstance } from '../shared/models/plant.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent implements OnInit {

  plantInstances: Observable<PlantInstance[]>;
  filteredPlantInstances: Observable<PlantInstance[]>;

  userInstances: Observable<User[]>;

  constructor(
    private plantInstancesService: PlantInstancesService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.plantInstancesService.seed();
    this.usersService.seed();    

    this.plantInstances = this.plantInstancesService.getPlants();
  }

  add() {
    this.plantInstancesService.addPlant();
  }

  changePlantOwner(key: string, newOwner: string): void {
    this.plantInstancesService.changePlantOwner(key, newOwner);
  }

  deletePlantInstance(key: string): void {
    this.plantInstancesService.deletePlantInstance(key);
  }

  search(term: string) {
    // this.filteredPlantInstances = this.plantInstances.  .filter(plant => plant.CommonName.includes(term))
  }
}