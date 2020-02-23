import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

export type IProfile = {
    name: string,
    passkey: string
}

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    userProfile: IProfile;

    constructor(
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.userProfile = JSON.parse(localStorage.userProfile);
    }

    areValidInputs() {
        if (this.userProfile.name.length > 0 && this.userProfile.passkey.length >= 4) {
            return true;
        } else {
            return false;
        }
    }

    updateUser() {
        if (this.areValidInputs()) {
            localStorage.userProfile = JSON.stringify(this.userProfile);
            this.location.back();
        }
    }

    deRegister() {
        localStorage.clear();
        location.reload();
    }

    aboutPage() {
        this.router.navigate(['about']);
    }

}
