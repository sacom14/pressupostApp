import { Component } from '@angular/core';

import { PriceOfServicesService } from '../services/price.service';
import { PriceOfServicesInterface } from '../interface/price.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public totalPrice: number = 0;

  constructor(public priceOfServices: PriceOfServicesService) { }

  addPrice(price: number, selected: PriceOfServicesInterface) {

    if (selected.active) {
      this.totalPrice -= price;
      selected.active = false;
    } else {
      this.totalPrice += price;
      selected.active = true;
    }
    console.log(this.totalPrice);
  }

}
