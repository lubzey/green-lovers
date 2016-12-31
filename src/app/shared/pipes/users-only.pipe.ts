import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Pipe({
  name: 'usersOnly'
})
export class UsersOnlyPipe implements PipeTransform {

  transform(value: Observable<any[]>): Observable<any[]> {
    return value.filter(x => x instanceof User);
  }
}