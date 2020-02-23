import { Component, OnInit } from '@angular/core';

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
    userCurrency: ICurrency = {
        symbol: '₹',
        name: 'Rupee'
    };

    userMoneyTree: IMoneyTree = {
        totalIncome: 1000,
        savings: 30,
        investment: 10,
        expenses: 50,
        donation: 10
    };

    constructor() { }

    ngOnInit() {
    }

    getCalculatedAmount(percentage: number) {
        return this.userCurrency.symbol + ' ' + (this.userMoneyTree.totalIncome * percentage / 100).toString();
    }

}
