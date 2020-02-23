import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    userMoneyTree: IMoneyTree;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.userMoneyTree = JSON.parse(localStorage.userMoneyTree);
        this.userCurrency = JSON.parse(localStorage.userCurrency);
    }

    getCalculatedAmount(percentage: number) {
        return this.userCurrency.symbol + ' ' + (this.userMoneyTree.totalIncome * percentage / 100).toString();
    }

    navigateToUrl(url: string) {
        this.router.navigate([url]);
    }

}
