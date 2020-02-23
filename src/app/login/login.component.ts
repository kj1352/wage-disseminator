import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    passkey: string;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    authenticateUser() {
        if (JSON.parse(localStorage.userProfile).passkey === this.passkey.trim()) {
            this.router.navigate(['dashboard']);
        }
    }
}
