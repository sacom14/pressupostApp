import { Data } from "@angular/router";

export interface BudgetInterface{
  nameOfBudget:string;
  nameOfClient:string;
  serveis: string[];
  totalBudget: number;
  date: string;
}
