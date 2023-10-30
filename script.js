class Calculator {
    // Constructs the default calculator based on default values
    constructor(prevCalcText, currCalcText) {
        this.prevCalcText = prevCalcText;
        this.currCalcText = currCalcText;
        this.clear()
    }
    
    // Clears all values from the calculator and sets default
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // Appends input numbers, validating for . before operating
    appendNumber(number){
        // // If there is a decimal in place, don't add a second decimal
        if (number === '.' && this.calculatorCurrent.includes('.')) return
        if (this.calculatorCurrent === undefined){
            this.calculatorCurrent = 0;
            console.log('yes');
        }
        else if (this.calculatorCurrent === 0){
            this.calculatorCurrent = number.toString();
        }
        else {
            this.calculatorCurrent = this.calculatorCurrent.toString() + number.toString();
            console.log('no');
        }
    }

    refresh(){
        this.currCalcText.innerText = this.calculatorCurrent;
        this.prevCalcText.innerText = this.previousOperand;
    }

    operation(operation){
        if (this.currentOperand === '') return
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
}


// Setting buttons by query data selectors
// [data-number] for all integers and '.'
// [data-X] for equal, sign, delete, remainder, allclear
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const intSign = document.querySelector('[data-sign]');
const deleteButton = document.querySelector('[data-delete]');
const remainderButton = document.querySelector('[data-remainder]');
const allClearButton = document.querySelector('[data-allclear]');

// Setting text for calculator display
const prevCalcText = document.querySelector('[data-calc-previous]');
const currCalcText = document.querySelector('[data-calc-current]');

const calculator = new Calculator(prevCalcText, currCalcText);

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.refresh();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.operation(button.innerText);
        calculator.refresh();
    });
});