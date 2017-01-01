import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Pipe({
  name: 'usersOnly'
})
export class UsersOnlyPipe implements PipeTransform {

  transform(value: any): User {
    return value instanceof User ? value : null;
  }
}