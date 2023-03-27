/**
 * A class to convert between Roman numerals and integers.
 */
export default class RomanNumeralConverter {
  /**
   * A dictionary mapping Roman numerals to their integer values.
   */
  private readonly romanNumerals: { [key: string]: number } = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  /**
   * Convert an integer to its Roman numeral representation.
   * @param num The integer to convert.
   * @returns The Roman numeral representation of the given integer.
   * @throws An error if the input number is out of range.
   */
  toRomanNumeral(num: number): string {
    if (num <= 0 || num >= 4000) {
      throw new Error('Number out of range!');
    }

    let result = '';
    for (const [key, value] of Object.entries(this.romanNumerals).reverse()) {
      while (num >= value) {
        result += key;
        num -= value;
      }
    }
    return result;
  }

  /**
   * Convert a Roman numeral string to its integer value.
   * @param str The Roman numeral string to convert.
   * @returns The integer value of the given Roman numeral string.
   */
  fromRomanNumeral(str: string): number {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const currentValue = this.romanNumerals[currentChar];
      const nextChar = str[i + 1];
      const nextValue = this.romanNumerals[nextChar];
      if (nextValue && nextValue > currentValue) {
        result += nextValue - currentValue;
        i++;
      } else {
        result += currentValue;
      }
    }
    return result;
  }
}
