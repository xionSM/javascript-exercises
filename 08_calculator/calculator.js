const add = function(num1, num2) {
let sum = num1 + num2;
return sum
};

const subtract = function(num1, num2) {
let sub = num1 - num2; 
return sub
};

const sum = function(array) {
let total = 0;
for (let i in array) {
  total += array[i]
}
return total
};

const multiply = function(array) {
let sum = 1;
  for (let i = 0; i < array.length; i++) {
  sum *= array[i]
}
return sum
};

const power = function(num, power) {
let sum = 1;
  for (let i = 0; i < power; i++) {
   sum *= num
}
return sum
	
};

const factorial = function(num) {
  let newArray = [];
  let sum = 1;
  for (let i = num; num > 0; num--){
    newArray.push(i)
    sum *= newArray.length
  }
  return sum
	
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
