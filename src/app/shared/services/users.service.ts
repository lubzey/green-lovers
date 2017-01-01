import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    seedUsers: FirebaseListObservable<User[]>;
    seedUser: FirebaseObjectObservable<User>;
    users: FirebaseListObservable<User[]>;

    constructor(private af: AngularFire) {
        this.seedUser = af.database.object('/greenloversclub');
        this.seedUsers = af.database.list('/users');
    }

    seed() {
        this.seedUsers.push({
            "firstName": "Gosho",
            "lastName": "Ivanov",
            "birthDate": "01.09.2014",
            "avatar": "https://goo.gl/wg6JLI",
            "photos": [],
            "garden": []
        });
        this.seedUsers.push({
            "firstName": "Petkan",
            "lastName": "Draganov",
            "birthDate": "01.09.2014",
            "avatar": "https://goo.gl/wg6JLI",
            "photos": [],
            "garden": []
        });
        this.seedUsers.push({
            "firstName": "Izdislav",
            "lastName": "Storaro",
            "birthDate": "01.09.2014",
            "avatar": "https://goo.gl/wg6JLI",
            "photos": [],
            "garden": []
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

    // searchUsers(term: string): Observable<User[]> {
    //     return this.seedUsers
    //         .map(x => x.filter(x =>
    //             x.firstName.toLowerCase().includes(term.toLowerCase())))
    // }

    getUsers(term?: string) {
        return term ?
            this.seedUsers
                .map(x => x.filter(x =>
                    x.firstName.toLowerCase()
                        .includes(term.toLowerCase())))
            : this.seedUsers;
    }

    deleteUser(key: string) {
        this.seedUsers.remove(key);
    }
}
