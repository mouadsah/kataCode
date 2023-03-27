import promptSync from 'prompt-sync';

/**
 * An option object with an id and a string option.
 */
export interface Option {
  id: number;
  option: string;
}

/**
 * A class to display and select options from a list.
 */
export default class OptionSelector {
  private options: Option[];

  /**
   * Create a new OptionSelector instance with the given options.
   * @param options An array of Option objects to display.
   */
  constructor(options: Option[]) {
    this.options = options;
  }

  /**
   * Display the available options and prompt the user to select one.
   * @returns The selected Option object or null if an invalid option was selected.
   */
  public selectOption(): Option | null {
    console.log('Available options:');
    this.options.forEach((option) => {
      console.log(`${option.id}. ${option.option}`);
    });
    console.log(`${this.options.length + 1}. Exit`);

    // Prompt the user to select an option.
    const input = promptSync()(`Select an option (1-${this.options.length + 1}): `);
    const selectedOptionIndex = parseInt(input) - 1;

    // Validate the selected option index.
    if (isNaN(selectedOptionIndex) || selectedOptionIndex < 0 || selectedOptionIndex > this.options.length) {
      return null;
    } else if (selectedOptionIndex === this.options.length) {
      // Return a special "Exit" option if the user selected the exit option.
      return {
        id    : this.options.length + 1,
        option: 'Exit' 
      };
    } else {
      // Return the selected option.
      const selectedOption = this.options[selectedOptionIndex];
      return selectedOption;
    }
  }
}
