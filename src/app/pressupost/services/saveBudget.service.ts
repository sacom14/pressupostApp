import { Injectable } from '@angular/core';

import { BudgetInterface } from '../interface/budget.interface';
import { SaveBudgetAndClientNameService } from './save-budget-and-client-name.service';

@Injectable({providedIn: 'root'})

export class SaveBudgetService {

  public budgets: BudgetInterface[] = [];

  constructor (private saveBudgetAndClientNameService: SaveBudgetAndClientNameService){
    const saveBudgetAndName = this.saveBudgetAndClientNameService.getSavedBudgets();

    this.budgets = saveBudgetAndName.map(budgetData => {
      return{
        nameOfBudget: budgetData.nameOfBudget,
        nameOfClient: budgetData.nameOfClient,
        serveis: budgetData.serveis,
        totalBudget: budgetData.price
      };
    });
  }

  // addBudget(budget:BudgetInterface):void{
  //   const newCharacter:BudgetInterface = {...budget}
  //   this.budgets.push(newCharacter);
  // }

  //todo
  // deleteBudget(id:string){
  //   this.budgets = this.budgets.filter(budget => budget.id !== id);
  // }
}
