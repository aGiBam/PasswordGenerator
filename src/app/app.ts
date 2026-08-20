import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  length = 0;
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
  const numbers = '1234567890'
  const symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?'
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let validChars = ''
  if(this.includeNumbers()){
    validChars += numbers
  }
  if(this.includeSymbols()){
    validChars += symbols
  }
  if(this.includeLetters()){
    validChars += letters
  }
  if (!validChars) {
    this.password = ''
    return
  }

  let generatedPassword = '';
  for (let i = 0; i < this.length; i++) {
    const index = crypto.getRandomValues(new Uint32Array(1))[0] % validChars.length
    generatedPassword += validChars.charAt(index)
  }
  this.password = generatedPassword
  }
onChangeLength(value: string){
 const parsedValue = parseInt(value);
 if(!isNaN(parsedValue)){
  this.length = parsedValue;
    }
  }
}
