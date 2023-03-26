export default class RomanNumeralConverter {
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

  toRomanNumeral(num: number): string {
    if (num <= 0 || num >= 4000) {
      throw new Error('Number out of range');
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
