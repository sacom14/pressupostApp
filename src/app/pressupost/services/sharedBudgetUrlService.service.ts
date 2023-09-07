import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TotalBudgetPriceService } from './totalBudgetPrice.service';

@Injectable({providedIn: 'root'})
export class SharedBudgetUrlServiceService {

  public webPage:boolean = false;
  public seoConsulting: boolean = false;
  public adsCampaign: boolean = false;
  public nPages: number = 0;
  public nLenguages: number = 0;

  constructor (private totalBudgetPriceService: TotalBudgetPriceService, private router:Router){}

  generateBudgetUrl(): string {
    const queryParams = {
      webPage: this.webPage.toString(),
      seoConsulting: this.seoConsulting.toString(),
      adsCampaign: this.adsCampaign.toString(),
      nPages: this.nPages.toString(),
      nLenguages: this.nLenguages.toString(),
    };

    // Generar la URL con los parámetros de consulta
    const url = '/budget?' + Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    // Realizar la navegación
    this.router.navigateByUrl(url);

    return url; // Devolver la URL generada si es necesario
  };

  updateBooleanAndGenerateUrl(webPage:boolean){
    //Actualizar las propiedades de los booleanos
    this.webPage = webPage;
    console.log('hol' + this.webPage)

    //Llamar a generateBudgetUrl para generar nueva URL
    this.generateBudgetUrl();


  }


  updatePageLanguagesAndGenerateBudgetUrl(newPages: number, newLanguages: number) {
    // Actualizar las propiedades nPages y nLenguages
    this.nPages = newPages;
    this.nLenguages = newLanguages;

    // Llamar a generateBudgetUrl para generar la nueva URL
    this.generateBudgetUrl();
  }
}
