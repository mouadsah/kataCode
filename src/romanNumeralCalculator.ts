export default class RomanNumeralCalculator {
    private readonly romanNumerals: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    private readonly romanKeys: string[] = [
        "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"
    ];
  
    public add(first: string, second: string): string | null {
        if(
            first.split("").filter(char => !this.romanNumerals[char]).length > 0 ||
            second.split("").filter(char => !this.romanNumerals[char]).length > 0
        ) {
            console.log("Please enter a valid roman numeral !")
            for (const key in this.romanNumerals) {
                console.log(`Key: ${key}, Value: ${this.romanNumerals[key]}`);
            }
            return null;
        }
        const firstValue = this.toDecimal(first);
        const secondValue = this.toDecimal(second);
        const sum = firstValue + secondValue;
        return this.toRoman(sum);
    }
  
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
  
    private toRoman(decimalValue: number): string | null {

        if (typeof decimalValue !== 'number') return null; 

        const digits = String(+decimalValue).split("");
        
        let romanNumeral = "",
            i = 3;
        while (i--) {
            romanNumeral = (this.romanKeys[+digits.pop() + (i * 10)] || "") + romanNumeral;
        }

        return Array(+digits.join("") + 1).join("M") + romanNumeral;
    }
}
  