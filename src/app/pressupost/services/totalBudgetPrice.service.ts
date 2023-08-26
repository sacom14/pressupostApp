import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TotalBudgetPriceService {
  private totalWebPrice: number = 0;
  private totalServicePrice: number = 0;

  addtTotalWebPrice(page: number, lenguage: number){
    this.totalWebPrice = page*lenguage*30;
    return;
  }

  addTotalServicePrice(price: number){

    this.totalServicePrice = price;
  }

  getTotalBudgetPrice(){
    return (this.totalWebPrice + this.totalServicePrice);
  }
}
