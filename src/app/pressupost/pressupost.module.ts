import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { LenguageModalComponent } from './modal/lenguage-modal/lenguage-modal.component';
import { PageModalComponent } from './modal/page-modal/page-modal.component';
import { PanellComponent } from './panell/panell.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BudgetTableComponent } from './budget/budget-table/budget-table.component';
import { SaveFormComponent } from './save-form/save-form.component';
import { BudgetTableSearchBoxComponent } from '../shared/search-box/search-box.component';



@NgModule({
  declarations: [
    HomeComponent,
    LenguageModalComponent,
    PageModalComponent,
    PanellComponent,
    WelcomeComponent,
    BudgetTableComponent,
    SaveFormComponent,
    BudgetTableSearchBoxComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PanellComponent,
  ]
})
export class PressupostModule { }
