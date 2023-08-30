import { Injectable } from '@angular/core';
import { BudgetInterface } from '../interface/budget.interface';

@Injectable({providedIn: 'root'})

export class SaveBudgetService {

  public budgets: BudgetInterface[] = [{
    nameOfBudget:'First Budget',
    clientName: 'First Client',
    serveis: ['pagina web', 'control del SEO'],
    totalBudget: 1200
  }]

  addBudget(budget:BudgetInterface):void{
    const newCharacter:BudgetInterface = {...budget}
    this.budgets.push(newCharacter);
  }

  //todo
  // deleteBudget(id:string){
  //   this.budgets = this.budgets.filter(budget => budget.id !== id);
  // }
}
