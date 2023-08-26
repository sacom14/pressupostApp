import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanellComponent
  ]
})
export class PressupostModule { }
