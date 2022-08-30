const add = function(valueOne,valueTwo) {
  let addTotal = valueOne + valueTwo;
  return addTotal;
};

const subtract = function(subOne, subTwo) {
	let subtractDiff = subOne - subTwo;
  return subtractDiff;
};

const sum = function(numbers) {
	let sumTotal = 0;
  for (const number of numbers){
    sumTotal += number;
  }
  return sumTotal;
};

const multiply = function(multiples) {
  let multTotal = 1;
  for (const multiple of multiples){
    multTotal *= multiple;
  }
  return multTotal;
};

const power = function(numOne, exp) {
	let powerTotal = numOne**exp;
  return powerTotal;
};

const factorial = function(factValue) {
  if ((factValue === 1) || (factValue === 0)){
    return 1;
  } else {
    return factValue * factorial(factValue-1);
  } 
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
