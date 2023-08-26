import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TotalBudgetPriceService {
  public totalWebPrice: number = 0;
  public totalServicePrice: number = 0;

  addtTotalWebPrice(page: number, lenguage: number){
    this.totalWebPrice = page*lenguage*30;
    return this.totalWebPrice;
  }

  addTotalServicePrice(price: number){

    this.totalServicePrice = price;
  }

  getTotalBudgetPrice(){
    return (this.totalWebPrice + this.totalServicePrice);
  }
}
