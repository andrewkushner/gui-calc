const add = function(num1, num2) {
  // Function takes 2 numbers and adds them together.
	return (num1 + num2);
};

const subtract = function(num1, num2) {
  // Function takes 2 numbers and subtracts them.
	return (num1 - num2);
};

const sum = function(array) {
  // Functon takes an array and returns the sum of the array.

  let total = 0;
  for (each in array){
    total += array[each];
  }

  return total;
};

const multiply = function(array) {
  // Function takes an array and returns the multiplication of the array items.
  let total = array[0];

  for (let i = 1; i < array.length ; i++){
    total *= array[i];
  }

  return total;
};

const power = function(num1, num2) {
  // Function takes 2 numbers and returns the power.
  let powered = num1;
  
  for (let i = 2 ; i <= num2 ; i++){
    powered *= num1;
  }
	return powered;
};

const factorial = function(num1) {
  // Function takes a number and returns the factorial of that number.
  // Factorial is every positive integer multipled together.
  // Ex. !7 is 7 x 6 x 5 x 4 x 3 x 2 x 1

  // Set factor to 1 which allows us to multiply it by the first number and keep the same value.
  let factor = 1;

  // If the given number is less than or equal to 0, return 1
  if (num1 <= 0){
    return 1;
  }
  else {
  // Starting with the given number, times it by the given number minus 1 until it reaches 0.
    for (let i = num1 ; i > 0 ; i--){
      factor *= (i); 
    }
    return factor;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
