import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    UserInputComponent,
  ],
  standalone: true
})
export class AppComponent {
  CalculateInvestmentResult( data : {
    initialInvestment:number;
    duration:number;
    expectedValue:number;
    annualInvestment:number;
  }){
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
    console.log(annualData);
  }

}
