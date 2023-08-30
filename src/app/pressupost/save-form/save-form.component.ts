import { Component, EventEmitter, Output } from '@angular/core';

import { SaveBudgetService } from '../services/saveBudget.service';
import { BudgetInterface } from '../interface/budget.interface';

@Component({
  selector: 'app-home-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent {
  @Output()
  public onNewBudget: EventEmitter<BudgetInterface> = new EventEmitter

  public budget: BudgetInterface = {
    nameOfBudget: '',
    clientName: '',
    serveis: [],
    totalBudget: 0
  }

  constructor (private saveBudgetService:SaveBudgetService){}

  emitBudget():void{
    this.onNewBudget.emit(this.budget);
    this.budget = {nameOfBudget:'', clientName:'', serveis:[], totalBudget:0};
    console.log(this.budget.clientName)
  };

  //todo esto va en el home.component en la parte de lista  creo para que se inyecte el array allí
  get budgets():BudgetInterface[]{
    return [...this.saveBudgetService.budgets];
  }

  addNewBudget(budget:BudgetInterface ){
    this.saveBudgetService.addBudget(budget);
  }
}
