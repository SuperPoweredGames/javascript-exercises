const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	let result = 0;

  num.forEach(num => {
    result += num;
  });

  return result;
};

const multiply = function(num) {
  let result = num[0];

if(num.length === 1 ) return num;

  for(i = 1; i < num.length; i++) {
    result *= num[i];
  }

  return result;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	
  if(num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
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
