import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {InvestmentInputModel} from "../investment-input.model"

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone:true,
  imports:[FormsModule]
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInputModel>();
  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';

  onSubmit() {
    console.log("SUBMITED");
    this.calculate.emit({
      initialInvestment : +this.enterInitialInvestment,
      duration: +this.enterDuration,
      expectedValue: +this.enterExpectedReturn,
      annualInvestment: +this.enterAnnualInvestment
    });
  }
}
