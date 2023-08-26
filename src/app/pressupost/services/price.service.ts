

import { Injectable } from '@angular/core';
import { PriceOfServicesInterface } from '../interface/price.interface';

@Injectable({providedIn: 'root'})

export class PriceOfServicesService {
  public priceOfServices: PriceOfServicesInterface[] = [
    {
      "name":'Fer una pàgina web',
      "price":500,
      "active":false
    },
    {
      "name":'Fer una campanya SEO',
      "price":300,
      "active":false
    },
    {
      "name":'Fer una campanya de publicitat',
      "price":200,
      "active":false
    }
  ]
}
