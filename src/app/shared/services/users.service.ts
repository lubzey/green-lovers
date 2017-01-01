import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UsersService {
  seedUsers: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    const remove = af.database.list('/users').remove();
    this.seedUsers = af.database.list('/users');
  }

  seed() {
    this.seedUsers.remove;
    this.seedUsers.push({
      "FirstName": "Gosho",
      "LastName": "Ivanov",
      "BirthDate": "01.09.2014",
      "Avatar": "https://goo.gl/wg6JLI",
      "Photos": [],
      "Garden": []
    });
    this.seedUsers.push({
      "FirstName": "Petkan",
      "LastName": "Draganov",
      "BirthDate": "01.09.2014",
      "Avatar": "https://goo.gl/wg6JLI",
      "Photos": [],
      "Garden": []
    });
    this.seedUsers.push({
      "FirstName": "Izdislav",
      "LastName": "Storaro",
      "BirthDate": "01.09.2014",
      "Avatar": "https://goo.gl/wg6JLI",
      "Photos": [],
      "Garden": []
    });
  }

  addUser() {
    this.seedUsers.push({
      "FirstName": "Zeleniq",
      "LastName": "Hulk",
      "BirthDate": "01.09.2014",
      "Avatar": "https://goo.gl/wg6JLI",
      "Photos": [],
      "Garden": []
    });
  }

  getUsers() {
    return this.seedUsers;
  }

  deleteUser(key: string) {
    this.seedUsers.remove(key);
  }
}
