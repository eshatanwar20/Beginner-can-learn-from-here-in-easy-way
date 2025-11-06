import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetings',
   standalone: true,
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss',
})
export class GreetingsComponent {
 /**
   * Input property that accepts data from the parent component (HomeComponent).
   * Accepts either a string or number value.
   * @required This input must be provided by the parent component.
   */
  public dataFromParentToChild = input.required<string | number>();   //input = send data from parent to child in simple lang and here where child recieve data


}