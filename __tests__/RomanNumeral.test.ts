import RomanNumeral from '../src/romanNumeral';

describe('RomanNumeral', () => {
  let romanNumeral: RomanNumeral;

  beforeEach(() => {
    romanNumeral = new RomanNumeral();
  });

  describe('calcul', () => {
    it('should return the sum of two Roman numerals', () => {
      const num1 = 'I';
      const num2 = 'II';
      const expectedResult = 'III';

      const result = romanNumeral.calcul(num1, num2);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('toRoman', () => {
    it('should return the Roman numeral equivalent of the entered integer', () => {
      const num = 123;
      const expectedResult = 'CXXIII';

      const result = romanNumeral.toRoman(num);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('fromRoman', () => {
    it('should return the integer equivalent of the entered Roman numeral', () => {
      const romanNum = 'XLII';
      const expectedResult = 42;

      const result = romanNumeral.fromRoman(romanNum);

      expect(result).toEqual(expectedResult);
    });
  });
});
