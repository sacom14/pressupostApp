import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-home-budgetTable-searchBox',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class BudgetTableSearchBoxComponent {

  @Input()
  public showMessageNoCoincidence: boolean = false;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  onInputChange(event: Event):void{
    const value = (event.target as HTMLInputElement).value;
    this.onValue.emit(value)
  }


}
