/**
 * A class that can perform addition of Roman numerals
 */
export default class RomanNumeralCalculator {
  
  /**
   * An object containing the decimal value for each Roman numeral
   */
  private readonly romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  /**
   * An array containing the Roman numeral string representation for each decimal value from 1 to 999
   */
  private readonly romanKeys: string[] = [
      "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
      "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
      "","I","II","III","IV","V","VI","VII","VIII","IX"
  ];

  /**
   * A method that performs addition of two Roman numerals
   * @param first The first Roman numeral to add
   * @param second The second Roman numeral to add
   * @returns The result of adding the two Roman numerals as a Roman numeral string, or null if either input is not a valid Roman numeral
   */
  public add(first: string, second: string): string | null {
      if(!this.isRomanNumeral(first) || !this.isRomanNumeral(second)) {
          console.log('\n--------------------------------------');
          console.log("Please enter a valid Roman numeral!");
          console.log(`Valid Roman numerals: ${Object.keys(this.romanNumerals)}`);
          console.log('--------------------------------------\n');
          return null;
      }
      const sum = this.toDecimal(first) + this.toDecimal(second);
      return this.toRoman(sum);
  }

  /**
   * A private method that checks if a given string is a valid Roman numeral
   * @param romanNumeral The string to check
   * @returns True if the string is a valid Roman numeral, false otherwise
   */
  private isRomanNumeral(romanNumeral: string): boolean {
      const invalidChars = romanNumeral.split("").filter(char => !this.romanNumerals[char]);
      return invalidChars.length === 0;
  }

  /**
   * A private method that converts a decimal value to its corresponding Roman numeral string representation
   * @param decimalValue The decimal value to convert
   * @returns The Roman numeral string representation of the decimal value, or null if the input is not a number
   */
  private toRoman(decimalValue: number): string | null {
    if (isNaN(decimalValue)) return null;
  
    const digits = String(+decimalValue).split("");
    let romanNumeral = "",
      i = 3;
    while (i--) {
      romanNumeral = (this.romanKeys[+digits.pop() + i * 10] || "") + romanNumeral;
    }
  
    // return "M".repeat(+digits.join("") + 1) + romanNumeral;
    return Array(+digits.join("") + 1).join("M") + romanNumeral;
  }
  
  /**
   * A private method that converts a Roman numeral string to its corresponding decimal value
   * @param romanNumeral The Roman numeral string to convert
   * @returns The decimal value of the Roman numeral string
   */
  private toDecimal(romanNumeral: string): number {
      let decimalValue = 0;
      for (let i = 0; i < romanNumeral.length; i++) {
          const current = this.romanNumerals[romanNumeral[i]];
          const next = this.romanNumerals[romanNumeral[i + 1]];
          if (next && next > current) {
              decimalValue += next - current;
              i++;
          } else {
              decimalValue += current;
          }
      }
      return decimalValue;
  }
}
