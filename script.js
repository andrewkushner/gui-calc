class Calculator {
    // Constructs the default calculator based on default values
    constructor(prevCalcText, currCalcText) {
        this.prevCalcText = prevCalcText;
        this.currCalcText = currCalcText;
        this.clear()
    }
    
    // Clears all values from the calculator and sets default
    clear(){
        this.calculatorCurrent = '';
        this.currentOperand = '';
        this.previousOperand = '';
        this.currCalcText.innerText = '';
        this.prevCalcText.innerText = '';
        this.operation = undefined;
    }

    // Appends input numbers, validating for decimal place before operating
    appendNumber(number){
        // If there is a decimal in place, don't add a second decimal
        if (number === '.' && this.calculatorCurrent.includes('.')) return
        if (operatorExists === 1){
            let mathInputTwo = number.toString();
            if (this.calculatorCurrent === 0){
                this.calculatorCurrent = number.toString();
            }
            else {
                this.calculatorCurrent = this.calculatorCurrent.toString() + number.toString();
            }
        }
        else {
            // Check current value for appending numbers
            if (this.calculatorCurrent === undefined){
                this.calculatorCurrent = 0;
            }
            else if (this.calculatorCurrent === 0){
                this.calculatorCurrent = number.toString();
            }
            else {
                this.calculatorCurrent = this.calculatorCurrent.toString() + number.toString();
            }
        }  
    }

    refresh(){
        // On input update the display
        this.currCalcText.innerText = this.calculatorCurrent;
        this.prevCalcText.innerText = this.previousOperand;
    }

    operate(operation){
        // If operator is blank do nothing
        if (this.currentOperand.innerText === '') return

        this.operation = operation;
        mathInputOne = parseInt(this.calculatorCurrent);
        mathOperation = this.operation;

        // If operation exists in string, do not add more.
        if (mathOperation === '×' && this.calculatorCurrent.includes('×')){
            operatorExists = 1;
            return
        }
        if (mathOperation === '-' && this.calculatorCurrent.includes('-')){
            operatorExists = 1;
            return
        }
        if (mathOperation === '+' && this.calculatorCurrent.includes('+')){
            operatorExists = 1;
            return
        }
        if (mathOperation === '÷' && this.calculatorCurrent.includes('÷')){
            operatorExists = 1;
            return
        }

        // If no operator, add it and set exists to 1
        if (operatorExists === 0){
            this.calculatorCurrent = mathInputOne + mathOperation;
            operatorExists = 1;
        }
        else {
            return
        }
    }

    equals(mathInputOne, mathOperation, mathInputTwo){
        let mathResult = 0;

        console.log(parseInt(mathInputOne) + 'math1');
        console.log(mathOperation + 'op1');
        console.log(parseInt(mathInputTwo) + 'math2');


        if (mathOperation === 'x'){
            mathResult = mathInputOne * mathInputTwo;
            mathInputOne = mathInputTwo;
            mathInputTwo = 0;
            this.prevCalcText = mathResult.toString();
            this.currCalcText = mathResult;
        }
        else if (mathOperation === '-'){
            mathResult = mathInputOne - mathInputTwo;
            mathInputOne = mathInputTwo;
            mathInputTwo = 0;      
            this.prevCalcText = mathResult.toString();      
            this.currCalcText = mathResult;
        }
        else if (mathOperation === '+'){
            mathResult = mathInputOne + mathInputTwo;
            mathInputOne = mathInputTwo;
            mathInputTwo = 0;
            this.prevCalcText = mathResult.toString();
            this.currCalcText = mathResult;
            console.log('fuck');
        }
        else if (mathOperation === '/'){
            mathResult = mathInputOne / mathInputTwo;
            mathInputOne = mathInputTwo;
            mathInputTwo = 0;
            this.prevCalcText = mathResult.toString();
            this.currCalcText = mathResult;
        }
        return mathResult;
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

// Operator check value
let operatorExists = 0;
let mathInputOne = 0;
let mathInputTwo = 0;
let mathOperation = '';

// const displayWidth = document.getElementById('display');
// console.log(window.getComputedStyle(displayWidth).width);


// Button events on click based on type of button
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.refresh();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.operate(button.innerText);
        calculator.refresh();
    });
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.refresh();
})

equalsButton.addEventListener('click', button => {
    calculator.equals();
    calculator.refresh();
})