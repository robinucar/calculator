class Calculator {
  constructor(previousOperand, currentOperand) {
    this.prevOperandElement = previousOperand;
    this.currentOperandElement = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {}

  computed() {}

  getDisplayNumber() {}

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');

const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');

const deleteButton = document.querySelector('[data-delete');

const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);

const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
