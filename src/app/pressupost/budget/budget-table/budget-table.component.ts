import {Component, Input} from '@angular/core';

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
  public originalBudgetList: BudgetInterface[]=[];//sirve para guardar la lista original
  constructor (private budgetAndClientName: SaveBudgetAndClientNameService){}

  ngOnInit(): void {
    this.budgetAndClientName.dataChanged.subscribe(()=> {
      const showBudget = this.budgetAndClientName.getSavedBudgets();
      this.budgetList = showBudget.map(budgetData => ({
          nameOfBudget:  budgetData.nameOfBudget,
          nameOfClient: budgetData.nameOfClient,
          serveis: budgetData.serveis,
          totalBudget: budgetData.totalBudget,
          date: budgetData.date,
      }));
      this.originalBudgetList = [...this.budgetList];
    });
  };

  //botones para ordenar la lista
  aphabeticalOrder():void{
    this.budgetList.sort((a,b) =>{
      const nameA = a.nameOfBudget.toUpperCase();
      const nameB = b.nameOfBudget.toUpperCase();
      return nameA.localeCompare(nameB);
    })
  }

  dataOrder(){
    this.budgetList.sort((a,b)=>{
      const dateA = new Date(a.date).toLocaleDateString();
      const dateB = new Date(b.date).toLocaleDateString();

      console.log(dateA);

      return dateA.localeCompare(dateB);
    })
  }

  resetOrder(){
  this.budgetList = [...this.originalBudgetList];
  }


}
