import promptSync from 'prompt-sync';
import RomanNumeralConverter from './romanNumeralConverter';
import RomanNumeralCalculator from './romanNumeralCalculator';

// Initialize instances of RomanNumeralConverter and RomanNumeralCalculator classes
const converter = new RomanNumeralConverter();
const calculator = new RomanNumeralCalculator();

export default class RomanNumeral {

  constructor() {
    // Constructor left empty as there are no class-level properties to initialize
  }

  /**
   * Prompts the user to enter two Roman numerals and returns their sum.
   * @returns {string} The sum of the two Roman numerals.
   */
  public calcul(): string {
    console.log('Enter two Roman numerals to calculate:');
    const num1 = promptSync()(`Number 1: `);
    const num2 = promptSync()(`Number 2: `);

    // Calculate the sum of the two Roman numerals
    // https://codingdojo.org/kata/RomanCalculator/
    return calculator.add(num1, num2);
  }

  /**
   * Prompts the user to enter an integer and returns the corresponding Roman numeral.
   * @returns {string} The Roman numeral equivalent of the entered integer.
   */
  public toRoman(): string {
    console.log('Enter an integer to convert to Roman numeral:');
    const num = promptSync()(`Number: `);

    // Convert the entered integer to its Roman numeral equivalent
    // https://codingdojo.org/kata/RomanNumerals/
    return converter.toRomanNumeral(parseInt(num));
  }

  /**
   * Prompts the user to enter a Roman numeral and returns the corresponding integer.
   * @returns {number} The integer equivalent of the entered Roman numeral.
   */
  public fromRoman(): number {
    console.log('Enter a Roman numeral to convert to integer:');
    const romanNum = promptSync()(`Roman Number: `);

    // Convert the entered Roman numeral to its integer equivalent
    return converter.fromRomanNumeral(romanNum);
  }
}
