import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PlantInstancesService {
  seedPlantInstances: FirebaseListObservable<any[]>;
  seedPlant: FirebaseObjectObservable<any>;
  plantInstances: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    const remove = af.database.list('/plant-instances').remove();
    this.seedPlantInstances = af.database.list('/plant-instances');
  }

  seed() {
    this.seedPlantInstances.push({
      name: 'vercheto',
      birthdate: '01.09.2014',
      owner: 'lubzey',
      commonName: 'Aloe vera'
    });

    this.seedPlantInstances.push({
      name: 'palmichka',
      birthdate: 'unknown',
      owner: 'lubzey',
      commonName: 'Dragon tree'
    });

    this.seedPlantInstances.push({
      name: 'princ limon',
      birthdate: '03.03.2016',
      owner: 'lubzey',
      commonName: 'Lemon'
    });
  }

  addPlant() {
    this.seedPlantInstances.push({
      name: 'Black pearl',
      birthdate: '01.02.2015',
      owner: 'lubzey',
      commonName: 'Chilli pepper'
    });
  }

  getPlants() {
    return this.seedPlantInstances;
  }

  changePlantOwner(key: string, newOwner: string) {
    this.seedPlantInstances.update(key, { owner: newOwner });
  }

  deletePlantInstance(key: string) {
    this.seedPlantInstances.remove(key);
  }
}
