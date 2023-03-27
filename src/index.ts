import OptionSelector, { Option } from './OptionSelector';
import RomanNumeral from './romanNumeral';

// Define available options
const options: Option[] = [
  { id: 1, option: 'Roman Calculator' },
  { id: 2, option: 'Convert to Roman Numeral' },
  { id: 3, option: 'Convert from Roman Numeral' },
];

// Create option selector and Roman numeral converter objects
const optionSelector = new OptionSelector(options);
const romanNumeral   = new RomanNumeral();

// Select option and perform corresponding action
let selectedOption: Option | null = optionSelector.selectOption();

while (selectedOption === null) {

  console.log('\n***********************************************');
  console.log('*Invalid option! Please select a valid option.*');
  console.log('***********************************************\n');
  selectedOption = optionSelector.selectOption();
}

switch (selectedOption.id) {
  case 1:
    // Perform actions for Roman Calculator
    const result1 = romanNumeral.calcul();
    console.log(`Result: ${result1}`);
    break;
  case 2:
    // Perform actions for Convert to Roman Numeral
    const result2 = romanNumeral.toRoman();
    console.log(`Result: ${result2}`);
    break;
  case 3:
    // Perform actions for Convert from Roman Numeral
    const result3 = romanNumeral.fromRoman();
    console.log(`Result: ${result3}`);
    break;
  default:
    console.log('Exit..');
    break;
}
