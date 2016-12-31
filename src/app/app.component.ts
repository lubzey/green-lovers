import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './shared/services/data.service';

import { PlantInstance } from './shared/models/plant-instance.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  plantInstances: Observable<PlantInstance[]>;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.seed();
    this.plantInstances = this.dataservice.getPlants();
  }

  changePlantOwner(key: string, newOwner: string): void {
    this.dataservice.plantInstances.update(key, { owner: newOwner });
  }

  deletePlantInstance(key: string): void {
    this.dataservice.plantInstances.remove(key);
  }


}