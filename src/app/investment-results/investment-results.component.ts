import {Component, Input} from '@angular/core';
import type {InvestmentInputModel} from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: true,
})
export class InvestmentResultsComponent {
  @Input() results?:{
    year: number;
    Interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]
}
