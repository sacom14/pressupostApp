import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';

import { BudgetInterface } from '../interface/budget.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveBudgetAndClientNameService } from '../services/saveBudgetAndClientName.service';
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
  @Input() public selectionServices: string[] = [];

  @Output() newBudgetAndClientNameEvent = new EventEmitter<BudgetInterface[]>()

  constructor(
    private saveBudgetAndClientName: SaveBudgetAndClientNameService,
    private fb: FormBuilder,
    private totalServicePrice: TotalBudgetPriceService,

  ) { }

  saveBudget() {
    if (this.myForm.valid) {
      const budgetName: string = this.myForm.get('budgetName')?.value;
      const clientName: string = this.myForm.get('clientName')?.value;
      const serveis: string[] = this.selectionServices
      const totalPrice: number = this.totalServicePrice.getTotalBudgetPrice().valueOf();     //Guardar el precio final en el array

      //agregar el objeto al array newBudgetAndCleintName
      const newBudgetClient: BudgetInterface = {
        nameOfBudget: budgetName,
        nameOfClient: clientName,
        serveis: serveis,
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
}
