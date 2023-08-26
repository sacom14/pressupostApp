import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TotalBudgetPriceService } from './../services/totalBudgetPrice.service';


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

  constructor(private fb: FormBuilder, private totalBudgetPriceService: TotalBudgetPriceService) { }
  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.valid) {
      const pages:number = this.myForm.get('page')!.value;
      const lenguages:number = this.myForm.get('lenguage')!.value;

      this.totalBudgetPriceService.addtTotalWebPrice(pages, lenguages);

    } else{
      this.totalBudgetPriceService.addtTotalWebPrice(0, 0);
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
