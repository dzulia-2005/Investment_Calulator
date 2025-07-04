import {Injectable, signal} from '@angular/core';
import type {InvestmentInputModel} from './investment-input.model';

@Injectable({providedIn: 'root'})
export class InvestmentService {

  resultData = signal<{
    year: number;
    Interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined>(undefined)

  CalculateInvestmentResult( data : InvestmentInputModel ){
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
       this.resultData.set(annualData);
    // this.resultData = annualData;
  }
}
