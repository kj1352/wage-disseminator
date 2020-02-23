import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    passkey: string;
    errMessage: string = '';

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    showError(message: string) {
        this.errMessage = message;

        setTimeout(() => {
            this.errMessage = '';
        }, 3000);
    }

    authenticateUser() {
        if (JSON.parse(localStorage.userProfile).passkey === this.passkey.trim()) {
            this.router.navigate(['dashboard']);
        } else {
            this.showError("Please check your passkey")
        }
    }

    deRegister() {
        localStorage.clear();
        location.reload();
    }
}
