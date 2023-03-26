import promptSync from 'prompt-sync';
import RomanNumeralConverter from './romanNumeralConverter';
import RomanNumeralCalculator from './romanNumeralCalculator';

const converter  = new RomanNumeralConverter();
const calculator = new RomanNumeralCalculator();


export default class RomanNumeral {
  
  constructor() {
  
  }
  public calcul(): any {
    console.log('Enter two Roman numerals to calulate:');
    const num1 = promptSync()(`Number 1: `);
    const num2 = promptSync()(`Number 2: `);

    // https://codingdojo.org/kata/RomanCalculator/
    return calculator.add(num1, num2)
    // const selectedOptionIndex = parseInt(input) - 1;
    // https://codingdojo.org/kata/RomanCalculator/
    // console.log(calculator.add('XX', 'II')); // should output 'XXII'
    // console.log(calculator.add('II', 'II')); // should output 'IV'
    // console.log(calculator.add('D', 'D')); // should output 'M'
  }
  public toRoman(): any {
    console.log('Enter an integer to convert to Roman numeral:');
    const num = promptSync()(`Number: `);

    // https://codingdojo.org/kata/RomanNumerals/
    return converter.toRomanNumeral(parseInt(num));

    // console.log(converter.toRomanNumeral(1)); // prints "I"
    // console.log(converter.toRomanNumeral(10)); // prints "X"
    // console.log(converter.toRomanNumeral(7)); // prints "VII"
    // console.log(converter.toRomanNumeral(63)); // prints "LXIII"
}
  
  public fromRoman(): any {
    console.log('Enter a Roman numeral to convert to integer:');
    const romanNum = promptSync()(`Roman Number: `);

    return converter.fromRomanNumeral(romanNum);
    // console.log("-------------")
    // console.log(converter.fromRomanNumeral("I")); // prints 1
    // console.log(converter.fromRomanNumeral("X")); // prints 10
    // console.log(converter.fromRomanNumeral("VII")); // prints 7
    // console.log(converter.fromRomanNumeral("LXIII")); // prints 63
  }
}
