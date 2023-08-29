import { BudgetInterface } from '../../interface/budget.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-budget-list-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent {

  @Input()
  public budgets:BudgetInterface[]=[];

}
