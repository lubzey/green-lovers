import { PlantInstance } from './plant.model';

export class User {

  FirstName: string;
  LastName: string;
  BirthDate: Date;
  Avatar: URL;
  Photos: URL[];
  Garden: PlantInstance[];
}
