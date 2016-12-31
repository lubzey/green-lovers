import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlantInstancesService } from '../shared/services/plant-instances.service';

import { PlantInstance } from '../shared/models/plant.model';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent implements OnInit {

  plantInstances: Observable<PlantInstance[]>;
  filteredPlantInstances: Observable<PlantInstance[]>;

  constructor(private plantInstancesService: PlantInstancesService) { }

  ngOnInit(): void {
    this.plantInstancesService.seed();
    
    this.plantInstances = this.plantInstancesService.getPlants();
  }

  add(){
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