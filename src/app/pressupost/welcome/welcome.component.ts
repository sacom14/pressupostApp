import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public showCalculator:boolean = false;

  constructor (private router:Router){}

  goToCalculator():void{
    this.showCalculator = true;
  }




}
