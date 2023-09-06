import { Component, EventEmitter, Output } from '@angular/core';

import { BudgetInterface } from '../interface/budget.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveBudgetAndClientNameService } from '../services/save-budget-and-client-name.service';
import { TotalBudgetPriceService } from '../services/totalBudgetPrice.service';

@Component({
  selector: 'app-home-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent {


  public myForm: FormGroup = this.fb.group({
    budgetName: ['', [Validators.required]],
    clientName: ['', [Validators.required]]
  })

  //guardamos los nuevos nombres de presupuesto y nombres de cliente
  public newBudgetAndClientName: BudgetInterface[] = [];
  public totalPriceOfBudget: number[] = [];

  @Output() newBudgetAndClientNameEvent = new EventEmitter<BudgetInterface[]>()

  // @Output()
  // public onNewBudget: EventEmitter<BudgetInterface> = new EventEmitter

  // public budget: BudgetInterface = {
  //   nameOfBudget: '',
  //   nameOfClient: '',
  //   serveis: [],
  //   totalBudget: 0
  // }

  constructor(
    private saveBudgetAndClientName: SaveBudgetAndClientNameService,
    private fb: FormBuilder,
    private totalServicePrice: TotalBudgetPriceService
  ) { }

  saveBudget() {
    if (this.myForm.valid) {
      const budgetName: string = this.myForm.get('budgetName')?.value;
      const clientName: string = this.myForm.get('clientName')?.value;
      // const serveis: string[]
      const totalPrice: number = this.totalServicePrice.getTotalBudgetPrice().valueOf();     //Guardar el precio final en el array

      //agregar el objeto al array newBudgetAndCleintName
      const newBudgetClient: BudgetInterface = {
        nameOfBudget: budgetName,
        nameOfClient: clientName,
        serveis: [],
        totalBudget: totalPrice
      };

      //Guardar los datos en el servicio
      this.saveBudgetAndClientName.saveBudgetData([newBudgetClient]);

      //Agregar el objeto de newBudgetClient al array newBugetAnd...
      this.newBudgetAndClientName.push(newBudgetClient);

      //limpiar el formulario después de guardar
      this.myForm.reset()

      //emitir evento
      this.newBudgetAndClientNameEvent.emit(this.saveBudgetAndClientName.getSavedBudgets());

    }
  }
  // emitBudget():void{
  //   this.onNewBudget.emit(this.budget);
  //   this.budget = {nameOfBudget:'', clientName:'', serveis:[], totalBudget:0};
  //   console.log(this.budget.clientName)
  // };

  // //todo esto va en el home.component en la parte de lista  creo para que se inyecte el array allí
  // get budgets():BudgetInterface[]{
  //   return [...this.saveBudgetService.budgets];
  // }

  // addNewBudget(budget:BudgetInterface ){
  //   this.saveBudgetService.addBudget(budget);
  // }
}
