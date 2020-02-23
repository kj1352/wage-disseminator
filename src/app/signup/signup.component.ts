import { Component, OnInit } from '@angular/core';
import { IProfile } from '../profile/profile.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    userProfile: IProfile = {
        name: '',
        passkey: ''
    };

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    areInputsValid() {
        if (this.userProfile.name.length > 0 && this.userProfile.passkey.length >= 4) {
            return true;
        } else {
            return false;
        }
    }

    registerUser() {
        if (this.areInputsValid()) {
            localStorage.userProfile = JSON.stringify(this.userProfile);
            this.router.navigate(['dashboard']);
        }
    }

}
