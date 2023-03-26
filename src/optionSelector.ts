import promptSync from 'prompt-sync';

export interface Option {
  id: number;
  option: string;
}

export default class OptionSelector {
  private options: Option[];

  constructor(options: Option[]) {
    this.options = options;
  }

  public selectOption(): Option | null {
    console.log('Available options:');
    this.options.forEach((option) => {
      console.log(`${option.id}. ${option.option}`);
    });
    console.log(`${this.options.length + 1}. Exit`);

    const input = promptSync()(`Select an option (1-${this.options.length + 1}): `);
    const selectedOptionIndex = parseInt(input) - 1;

    if (isNaN(selectedOptionIndex) || selectedOptionIndex < 0 || selectedOptionIndex > this.options.length) {
      return null;
    } else if (selectedOptionIndex === this.options.length) {
      return {
        id    : this.options.length + 1, 
        option: 'Exit' 
      };
    } else {
      const selectedOption = this.options[selectedOptionIndex];
      return selectedOption;
    }
  }
}
