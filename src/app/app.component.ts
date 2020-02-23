import { Component } from '@angular/core';
import { ICurrency, IMoneyTree } from './dashboard/dashboard.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    userMoneyTree: IMoneyTree = {
        totalIncome: 1000,
        savings: 30,
        investment: 10,
        expenses: 50,
        donation: 10
    };

    userCurrency: ICurrency = {
        symbol: '₹',
        name: 'Rupee'
    };

    constructor() {
        if (!localStorage.userMoneyTree) {
            localStorage.userMoneyTree = JSON.stringify(this.userMoneyTree);
        }

        if (!localStorage.userCurrency) {
            localStorage.userCurrency = JSON.stringify(this.userCurrency);
        }
    }
}
