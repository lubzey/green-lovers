import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { PlantInstance } from './../models/plant.model';
import { User } from './../models/user.model';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }
    
    search(term: string): Observable<any[]> {
        return this.http
            .get(`USERS URL`)
            .map((r: Response) => r.json().data as User[])
            .merge(
              this.http
            .get(`PLANTS URL`)
            .map((r: Response) => r.json().data as PlantInstance[]));
    }
}
