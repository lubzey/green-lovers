import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DataService {
  seedPlantInstances: FirebaseListObservable<any[]>;
  seedPlant: FirebaseObjectObservable<any>;
  plantInstances: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.seedPlant = af.database.object('/greenloversclub');
    this.seedPlantInstances = af.database.list('/plantinstances');
  }

  seed() {
    this.seedPlantInstances.update('vercheto', {
      birthdate: '01.09.2014',
      owner: 'lubzey',
      commonName: 'Aloe vera'
    });

    this.seedPlantInstances.update('palmichka', {
      birthdate: 'unknown',
      owner: 'lubzey',
      commonName: 'Dragon tree'
    });

    this.seedPlantInstances.update('princ limon', {
      birthdate: '03.03.2016',
      owner: 'lubzey',
      commonName: 'Lemon'
    });
  }

  getPlants() {
    return this.plantInstances;
  }

  changePlantOwner(key: string, newOwner: string) {
    this.plantInstances.update(key, { owner: newOwner });
  }

  deletePlantInstance(key: string) {
    this.plantInstances.remove(key);
  }
}
