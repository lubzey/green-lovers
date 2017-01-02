import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthenticationService {
    displayName;
    photoURL;
    currentUser: {
        displayName,
        photoURL
    };

    constructor(private af: AngularFire) { }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((authState: any) => {
            this.af.database.object('/fbusers/' + authState.uid).update({
                accessToken: authState.facebook.accessToken,
                username: authState.auth.displayName,
                avatar: authState.auth.photoURL,
                email: authState.auth.email
            })
        });
    }

    logout() {
        this.af.auth.logout();
    }

    getCurrentUser() {
        return this.af.auth;
    }
}