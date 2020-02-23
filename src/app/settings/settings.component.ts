import { Component, OnInit } from '@angular/core';
import { ICurrency, IMoneyTree } from '../dashboard/dashboard.component';
import { Location } from '@angular/common';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    userMoneyTree: IMoneyTree;
    userCurrency: ICurrency;

    constructor(
        private location: Location
    ) { }

    ngOnInit() {
        this.userMoneyTree = JSON.parse(localStorage.userMoneyTree);
        this.userCurrency = JSON.parse(localStorage.userCurrency);
    }

    areValidInputs() {
        let total: number = this.userMoneyTree.savings + this.userMoneyTree.investment +
        this.userMoneyTree.expenses + this.userMoneyTree.donation;

        if (total === 100 && this.userMoneyTree.totalIncome > 0 && this.userCurrency.symbol.trim() && this.userCurrency.name.trim()) {
            return true;
        } else {
            return false;
        }
    }

    saveData() {
        if (this.areValidInputs()) {
            localStorage.userMoneyTree = JSON.stringify(this.userMoneyTree);
            localStorage.userCurrency = JSON.stringify(this.userCurrency);
            this.location.back();
        }
    }

}
