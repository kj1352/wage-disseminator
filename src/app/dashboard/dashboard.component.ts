import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '../profile/profile.component';

export type IMoneyTree = {
    totalIncome: number,
    savings: number,
    investment: number,
    expenses: number,
    donation: number
};

export type ICurrency = {
    symbol: string,
    name: string
};

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    userCurrency: ICurrency;
    userProfile: IProfile;
    userMoneyTree: IMoneyTree;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.userMoneyTree = JSON.parse(localStorage.userMoneyTree);
        this.userCurrency = JSON.parse(localStorage.userCurrency);
        this.userProfile = JSON.parse(localStorage.userProfile);
    }

    getFirstLetter(name: string) {
        return name.charAt(0);
    }

    getCalculatedAmount(percentage: number) {
        return this.userCurrency.symbol + ' ' + (this.userMoneyTree.totalIncome * percentage / 100).toString();
    }

    navigateToUrl(url: string) {
        this.router.navigate([url]);
    }

    share() {
        let newVariable: any;
        newVariable = window.navigator;

        if (newVariable && newVariable.share) {
            newVariable.share({
                title: 'Wage Disseminator',
                text: 'Check out this Web App!',
                url: 'https://wage-disseminator.firebaseapp.com',
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Share not supported");
        }
    }

}
