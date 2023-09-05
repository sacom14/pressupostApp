import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { SaveFormInterface } from '../interface/saveForm.interface';

@Injectable({
  providedIn: 'root'
})
export class SaveBudgetAndClientNameService {

  private savedBudgetsAndClientsName: SaveFormInterface[]=[{
    nameOfBudget: 'primer cliente prubea nombre presupuesto',
    nameOfClient: 'primer cliente nombre prueba',
    serveis: ['pagina web', 'control SEO', 'prueba'],
    price: 1000

  },{
    nameOfBudget: 'primer cliente prubea nombre presupuesto',
    nameOfClient: 'primer cliente nombre prueba',
    serveis: ['pagina web', 'control SEO', 'prueba'],
    price: 1000
  }];

  constructor() { }

  //guardar los datos localmente en el servicio
  saveBudgetData(data: SaveFormInterface[]):void {
    this.savedBudgetsAndClientsName = data;
  }

  //recuperar los datos almacenados
  getSavedBudgets(): SaveFormInterface[]{
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

}
