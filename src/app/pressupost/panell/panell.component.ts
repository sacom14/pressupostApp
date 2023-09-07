import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TotalBudgetPriceService } from './../services/totalBudgetPrice.service';
import { SharedBudgetUrlServiceService } from '../services/sharedBudgetUrlService.service';


@Component({
  selector: 'app-home-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})

export class PanellComponent {

  public totalWebPrice: number = 0;
  public webSelectedService: string = 'Fer una pàgina web';
  public showPanell: boolean = false;

  public myForm: FormGroup = this.fb.group({
    page: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
    lenguage: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
  })

  constructor(private fb: FormBuilder,
    private totalBudgetPriceService: TotalBudgetPriceService,
    private sharedBudgetServiceService: SharedBudgetUrlServiceService) { }

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.valid) {
      const pages:number = this.myForm.get('page')!.value;
      const languages:number = this.myForm.get('lenguage')!.value;

      //añadir precir de las paginas e idiomas
      this.totalBudgetPriceService.addtTotalWebPrice(pages, languages);

      //actualizar las propiedasdes de pages e idiomas
      this.sharedBudgetServiceService.nPages = pages;
      this.sharedBudgetServiceService.nLenguages = languages;

      //llamar a la función que actualizara y generará la url
      this.sharedBudgetServiceService.updatePageLanguagesAndGenerateBudgetUrl(pages, languages);

    } else{
      this.totalBudgetPriceService.addtTotalWebPrice(0, 0);
      this.sharedBudgetServiceService.updatePageLanguagesAndGenerateBudgetUrl(0,0)
    }
  }

  increaseValue(fieldName: string){
    const field = this.myForm.get(fieldName);
    if(field){
      const currentValue = field.value;
      field.setValue(Math.min(currentValue + 1, 20));
    }
  }

  decraseValue(fieldName:string){
    const field = this.myForm.get(fieldName);
    if(field){
      const currentValue = field.value;
      field.setValue(Math.max(currentValue -1,1));
    }
  }

}
