import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  password = "";
  includeNumbers = signal(false);
  includeSymbols = signal(false);
  includeLetters = signal(false);

  onChangeUseNumbers(){
      console.log("changedNumbers");

    this.includeNumbers.set(!this.includeNumbers());
  }
  onChangeUseSymbols(){
      console.log("changedSymbols");

    this.includeSymbols.set(!this.includeSymbols());
  }
  onChangeUseLetters(){
      console.log("changedLetters");

    this.includeLetters.set(!this.includeLetters());
  }
onButtonClick(){
  console.log(this.includeNumbers(),'numbers');
  console.log(this.includeSymbols(),'symbols');
  console.log(this.includeLetters(),'letters');
  this.password = "My Assword !!!";
}
}
