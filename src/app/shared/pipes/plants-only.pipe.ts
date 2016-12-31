import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { PlantInstance } from './../models/plant.model';

@Pipe({
  name: 'plantsOnly'
})
export class PlantsOnlyPipe implements PipeTransform {

  transform(value: Observable<any[]>): Observable<any[]> {
    return value.filter(x => x instanceof PlantInstance);
  }

}
