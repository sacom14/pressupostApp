import { EventEmitter, Injectable } from '@angular/core';
import { BudgetInterface } from '../interface/budget.interface';

@Injectable({
  providedIn: 'root'
})
export class SaveBudgetAndClientNameService {

  private savedBudgetsAndClientsName: BudgetInterface[]=[];
  public dataChanged: EventEmitter<void> = new EventEmitter<void>(); //emitter para cada cambio de datos


  constructor() { }

  //guardar los datos localmente en el servicio
  saveBudgetData(newData: BudgetInterface[]):void {
    this.savedBudgetsAndClientsName.push(...newData);
    this.notifyDataChanged();
  }

  //recuperar los datos almacenados
  getSavedBudgets(): BudgetInterface[]{
    return this.savedBudgetsAndClientsName;
  }

  //obtener el nombre del prsupuesto por índex
  getNameOfBudgetByIndex(index:number): string{
    if(index < this.savedBudgetsAndClientsName.length){

      return this.savedBudgetsAndClientsName[index].nameOfBudget;
    }
    return '';
  }

  //obtener el nombre del cliente por index
  getNameOfClientByIndex(index:number):string{
    if(index < this.savedBudgetsAndClientsName.length){
      return this.savedBudgetsAndClientsName[index].nameOfClient;
    }
    return '';
  }

  //notificacion de cambios a los que pueden acceder a este metodo
  notifyDataChanged(){
    this.dataChanged.emit()
  }

}
