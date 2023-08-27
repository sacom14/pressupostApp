import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pressupost/home/home.component';
import { WelcomeComponent } from './pressupost/welcome/welcome.component';
import { ModalComponent } from './pressupost/modal/modal.component';

const routes: Routes = [

  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'modal', component: ModalComponent},
  {path: '**', pathMatch:'full', redirectTo: 'welcome'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
