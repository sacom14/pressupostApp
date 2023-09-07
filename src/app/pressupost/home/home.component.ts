import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { PriceOfServicesInterface } from '../interface/price.interface';
import { PriceOfServicesService } from '../services/priceOfServices.service';
import { SelectedServiceService } from '../services/selectedService.service';
import { SharedBudgetUrlServiceService } from '../services/sharedBudgetUrlService.service';
import { TotalBudgetPriceService } from '../services/totalBudgetPrice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public totalPrice: number = 0;
  public showPanell: boolean = false;
  public webSelectedService = 'Fer una pàgina web';
  public showButtonForBack: boolean = false;
  //esto lo pasamos en el <app-home-save-form></app-hom-save-form> con el [selectionServices]="selectionServices"
  public selectionServices: string[] = [];

  //url
  public budgetUrl: string = '';

  //esto es para que se actualice el precio del panel a tiempo real
  get totalBudgetPrice(): number {
    this.showBackButton()
    return this.totalServicePrice.getTotalBudgetPrice();
  }


  constructor(public priceOfServices: PriceOfServicesService,
    private totalServicePrice: TotalBudgetPriceService,
    private selectedService: SelectedServiceService,
    private sharedBudgetUrlServiceService: SharedBudgetUrlServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      //leer los parámetros de la ruta y convertirlos en true/false o numéricos
      this.sharedBudgetUrlServiceService.webPage = queryParams.get('webPAge') === 'true';
      this.sharedBudgetUrlServiceService.seoConsulting = queryParams.get('seoConsulting') === 'true';
      this.sharedBudgetUrlServiceService.adsCampaign = queryParams.get('adsCampaign') === 'true';
      this.sharedBudgetUrlServiceService.nPages = parseInt(queryParams.get('nPages') || '0', 20);
      this.sharedBudgetUrlServiceService.nLenguages = parseInt(queryParams.get('nLenguages') || '0', 20);

      //generar Url
      this.generateBudgetUrl();
    });
  }

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

  toggleSelection(serviceName: string): void {
    this.selectedService.toggleSelection(serviceName);

    //actualizar el array teniendo en cuenta si esta seleccionado o no
    if (this.selectedService.isSelected(serviceName)) {
      this.selectionServices.push(serviceName); //lo añadimos al array
      if(serviceName === 'Fer una pàgina web' && !this.sharedBudgetUrlServiceService.webPage){
        this.sharedBudgetUrlServiceService.webPage = true;
        console.log(this.sharedBudgetUrlServiceService.webPage)
      }
    } else {
      //lo eliminamos del array
      this.selectionServices = this.selectionServices.filter(service => service !== serviceName);

      if(serviceName === 'Fer una pàgina web' && this.sharedBudgetUrlServiceService.webPage){
        this.sharedBudgetUrlServiceService.webPage = false;
        console.log(this.sharedBudgetUrlServiceService.webPage);

      }
    }
    this.sharedBudgetUrlServiceService.updateBooleanAndGenerateUrl(this.sharedBudgetUrlServiceService.webPage);
  }

  isSelected(serviceName: string): boolean {
    return this.selectedService.isSelected(serviceName);
  }

  showBackButton(): void {
    if (this.totalPrice !== 0) {
      this.showButtonForBack = false;
    } else {
      this.showButtonForBack = true;
    }
  }

  //metodo para generar URL del prssupuesto
  generateBudgetUrl() {
    const budgetUrl = this.sharedBudgetUrlServiceService.generateBudgetUrl();
    this.budgetUrl = budgetUrl; // Actualizar la propiedad budgetUrl si es necesario
  }

}
