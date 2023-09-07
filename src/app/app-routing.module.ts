import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pressupost/home/home.component';

import { WelcomeComponent } from './pressupost/welcome/welcome.component';
import { PanellComponent } from './pressupost/panell/panell.component';


const routes: Routes = [

  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},

  // {path: 'budget/:webPage/:seoConsulting/:adsCampaign/:nPages/:nLenguages', component: HomeComponent},

  {path: 'budget', component:HomeComponent, pathMatch:'full'},
  {path: 'home/panell', component:PanellComponent},

  {path: '**', pathMatch:'full', redirectTo: 'welcome'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
