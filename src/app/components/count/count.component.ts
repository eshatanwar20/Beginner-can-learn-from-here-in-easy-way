import { Component, signal } from '@angular/core';
//this component i made so that you can easily understand a normal process of increment ,decrement in angular in good way
@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {
  /*
   * .set(newValue): Overwrite ➡️ Replaces the current signal value entirely with the newValue.
   * Use when the new value is independent of the old value (e.g., loading a user profile from scratch).
   *
   * .update(updaterFn): Calculate ➡️ Replaces the value based on the previous value (current state).
   * Use when the new value depends on the previous state (e.g., incrementing a counter or merging complex objects).
   */
  public CounterValue = signal(0);
  public onIncrement() {
    this.CounterValue.update((CountValue) => CountValue + 1); // use the update function get the latest value and then update it
  }

  public onDecrement() {
    this.CounterValue.update((val) => val - 1);
  }

  public resetCounterValue() {
    this.CounterValue.set(0);
  }

  // now for sure you have confusion why we use set in reset let me clear this in short Reset doesn't depend on current value ,so we use set 
// but increment/decrement does

}
