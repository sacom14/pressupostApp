import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { BudgetInterface } from '../../interface/budget.interface';
import { SaveBudgetAndClientNameService } from '../../services/saveBudgetAndClientName.service';

@Component({
  selector: 'app-home-budget-list-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent {

  @Input()
  public budgetList:BudgetInterface[]=[];

  constructor (
    private budgetAndClientName: SaveBudgetAndClientNameService,
    private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.budgetAndClientName.dataChanged.subscribe(()=> {
      const showBudget = this.budgetAndClientName.getSavedBudgets();
      this.budgetList = showBudget.map(budgetData => ({
          nameOfBudget: budgetData.nameOfBudget,
          nameOfClient: budgetData.nameOfClient,
          serveis: budgetData.serveis,
          totalBudget: budgetData.totalBudget
      }));
    });
  };
}
