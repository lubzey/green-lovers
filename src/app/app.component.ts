import { Component, OnInit } from '@angular/core';

import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  plantInstances: any[] = [];

  constructor(private DataService) { }

  ngOnInit(): void {
    this.DataService.seed();
    this.plantInstances = this.DataService.getPlants();
  }

  changePlantOwner(key: string, newOwner: string): void {
    this.DataService.plantInstances.update(key, { owner: newOwner });
  }

  deletePlantInstance(key: string): void {
    this.DataService.plantInstances.remove(key);
  }


}