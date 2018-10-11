import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidatorService {

  constructor() { }

  validateInputStrings(...input: String[]): boolean {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === undefined || input[i] === null || input[i].trim() === "" || input.length > 200) {
        return false;
      }
    }
    return true;
  }

  validateInputDate(input: Date): boolean {
    if (input === undefined || input === null) {
      return false;
    }
    return true;
  }
}
