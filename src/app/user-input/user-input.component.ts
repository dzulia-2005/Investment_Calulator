import {Component, } from '@angular/core';
import {InvestmentService} from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone:false,

})
export class UserInputComponent {
  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';

  constructor(private investmentService:InvestmentService) {}

  onSubmit() {
    console.log("SUBMITED");
    this.investmentService.CalculateInvestmentResult({
      initialInvestment : +this.enterInitialInvestment,
      duration: +this.enterDuration,
      expectedValue: +this.enterExpectedReturn,
      annualInvestment: +this.enterAnnualInvestment
    })
  }
}
