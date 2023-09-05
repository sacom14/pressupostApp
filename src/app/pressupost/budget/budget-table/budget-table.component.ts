import { Component, Input, OnInit } from '@angular/core';

import { SaveBudgetService } from '../../services/saveBudget.service';

import { BudgetInterface } from '../../interface/budget.interface';
import { SaveFormInterface } from '../../interface/saveForm.interface';

@Component({
  selector: 'app-home-budget-list-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent {

  @Input()
  public budgetList:BudgetInterface[]=[];

  constructor (private savedBudget:SaveBudgetService){

    console.log(this.budgetList);

    this.budgetList = this.savedBudget.budgets.map(budget => ({
      nameOfBudget: budget.nameOfBudget,
      nameOfClient: budget.nameOfClient,
      serveis: budget.serveis,
      totalBudget: budget.totalBudget,
    }));
  }
}
