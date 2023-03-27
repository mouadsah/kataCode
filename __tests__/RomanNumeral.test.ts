import RomanNumeral from '../src/romanNumeral';

describe('RomanNumeral', () => {
  let romanNumeral: RomanNumeral;

  beforeEach(() => {
    romanNumeral = new RomanNumeral();
  });

  describe('calcul', () => {
    it('should return the sum of two Roman numerals', () => {
      const num1 = 'II';
      const num2 = 'II';
      const expectedResult = 'IV';

      const result = romanNumeral.calcul(num1, num2);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('toRoman', () => {
    it('should return the Roman numeral equivalent of the entered integer', () => {
      const num = 7;
      const expectedResult = 'VII';

      const result = romanNumeral.toRoman(num);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('fromRoman', () => {
    it('should return the integer equivalent of the entered Roman numeral', () => {
      const romanNum = 'LXIII';
      const expectedResult = 63;

      const result = romanNumeral.fromRoman(romanNum);

      expect(result).toEqual(expectedResult);
    });
  });
});
