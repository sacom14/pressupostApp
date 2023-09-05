import { Component } from '@angular/core';

import { PriceOfServicesService } from '../services/priceOfServices.service';
import { PriceOfServicesInterface } from '../interface/price.interface';
import { TotalBudgetPriceService } from '../services/totalBudgetPrice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public totalPrice: number = 0;
  public showPanell: boolean = false;
  public webSelectedService = 'Fer una pàgina web';
  public showButtonForBack: boolean = false;

//esto es para que se actualice el precio del panel a tiempo real
  get totalBudgetPrice():number{
    this.showBackButton()
    return this.totalServicePrice.getTotalBudgetPrice();
  }


  constructor(public priceOfServices: PriceOfServicesService, private totalServicePrice: TotalBudgetPriceService) { }

  addPrice(price: number, selected: PriceOfServicesInterface) {

    if (selected.active) {
      this.totalPrice -= price;
      selected.active = false;
    } else {
      this.totalPrice += price;
      selected.active = true;
    }

    this.totalServicePrice.addTotalServicePrice(this.totalPrice);
  }

  selectedService(service: PriceOfServicesInterface) {
    // service:PriceOfServicesInterface
    if (this.webSelectedService !== service.name) return;

    if (this.showPanell) {
      this.showPanell = false;
      this.totalServicePrice.totalWebPrice = 0;
      this.totalServicePrice.getTotalBudgetPrice();
      return;
    }
    this.showPanell = true;
  }

  showBackButton():void{
    if(this.totalPrice !== 0){
      this.showButtonForBack = false;
    } else {
      this.showButtonForBack = true;
    }
  }

}
