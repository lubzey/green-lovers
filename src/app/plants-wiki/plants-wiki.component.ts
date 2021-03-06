import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlantInstancesService } from '../shared/services/plant-instances.service';
import { PlantInstance } from '../shared/models/plant-instance.model';


@Component({
  selector: 'app-plants-wiki',
  template: require('./plants-wiki.component.html'),
  styles: [require('./plants-wiki.component.css')]
})
export class PlantsWikiComponent implements OnInit {
  plantInstances: PlantInstance[];
  filteredPlantInstances: Observable<PlantInstance[]>;

  constructor(private plantInstancesService: PlantInstancesService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() {
    this.plantInstancesService.getPlants().subscribe(plantInstances => {
      this.plantInstances = plantInstances;
      console.log(this.plantInstances);
    });
    
  }
}
