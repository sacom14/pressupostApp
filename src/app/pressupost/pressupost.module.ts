import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { PageModalComponent } from './modal/page-modal/page-modal.component';
import { LenguageModalComponent } from './modal/lenguage-modal/lenguage-modal.component';




@NgModule({
  declarations: [
    HomeComponent,
    PanellComponent,
    WelcomeComponent,
    PageModalComponent,
    LenguageModalComponent,

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
