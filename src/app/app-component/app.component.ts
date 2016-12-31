import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './shared/services/data.service';

import { PlantInstance } from './shared/models/plant-instance.model';

@Component({
  selector: 'app-root',
<<<<<<< HEAD:src/app/app-component/app.component.ts
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
>>>>>>> 9e5646e1453902af0b5f2d2ee02c9070f18e4944:src/app/app.component.ts
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