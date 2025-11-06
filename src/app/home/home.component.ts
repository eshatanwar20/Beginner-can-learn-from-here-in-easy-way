import { Component, computed, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CountComponent } from "../components/count/count.component";

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent, CountComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public sendData = signal('Hello child compt from parent');

// what is event listener?
// An Event Listener is how you tell a piece of HTML (like a button, input field, or paragraph) to watch for a specific action from the user and then run a method (a function) defined in your TypeScript component code.
  keyUpHandler(event:KeyboardEvent){
    console.log(`user clicks a key ${event.key}`);
  }
  //In this HomeComponent we will learn how to bind  event listeners  very basic so you can understand easily 
}
