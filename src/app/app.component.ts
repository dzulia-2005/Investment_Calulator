import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import type {InvestmentInputModel} from "./investment-input.model"
import {InvestmentResultsComponent} from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  standalone: true
})
export class AppComponent {
  resultData?:{
    year: number;
    Interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  CalculateInvestmentResult( data : InvestmentInputModel){
    const {initialInvestment,duration,expectedValue,annualInvestment} = data
    const annualData = [];
    let investmentValue = initialInvestment;
    for(let i=0; i<duration; i++){
      const year = i+1;
      const InterestEarnedYear = investmentValue*(expectedValue / 100);

      investmentValue += InterestEarnedYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - investmentValue;
      annualData.push({
        year: year,
        Interest: InterestEarnedYear,
        valueEndOfYear : investmentValue,
        annualInvestment: investmentValue,
        totalInterest: totalInterest,
        totalAmountInvested:initialInvestment + annualInvestment * year
      })
    }
    this.resultData = annualData;
  }

}
