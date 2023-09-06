import { Component } from '@angular/core';

import { PriceOfServicesService } from '../services/priceOfServices.service';
import { PriceOfServicesInterface } from '../interface/price.interface';
import { TotalBudgetPriceService } from '../services/totalBudgetPrice.service';
import { SelectedServiceService } from '../services/selectedService.service';


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
  //esto lo pasamos en el <app-home-save-form></app-hom-save-form> con el [selectionServices]="selectionServices"
  public selectionServices: string[]=[];

//esto es para que se actualice el precio del panel a tiempo real
  get totalBudgetPrice():number{
    this.showBackButton()
    return this.totalServicePrice.getTotalBudgetPrice();
  }

  constructor(public priceOfServices: PriceOfServicesService,
    private totalServicePrice: TotalBudgetPriceService,
    private selectedService: SelectedServiceService) { }

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

  selectedWebService(service: PriceOfServicesInterface) {
    if (this.webSelectedService !== service.name) return;

    if (this.showPanell) {
      this.showPanell = false;
      this.totalServicePrice.totalWebPrice = 0;
      this.totalServicePrice.getTotalBudgetPrice();
      return;
    }
    this.showPanell = true;
  }

  toggleSelection(serviceName: string):void{
    this.selectedService.toggleSelection(serviceName);

    //actualizar el array teniendo en cuenta si esta seleccionado o no
    if(this.selectedService.isSelected(serviceName)){
      this.selectionServices.push(serviceName); //lo añadimos al array
    } else{
      this.selectionServices = this.selectionServices.filter(service => service !== serviceName);//lo eliminamos del array
    }
  }

  isSelected(serviceName: string):boolean{
    return this.selectedService.isSelected(serviceName);
  }

  showBackButton():void{
    if(this.totalPrice !== 0){
      this.showButtonForBack = false;
    } else {
      this.showButtonForBack = true;
    }
  }

}
