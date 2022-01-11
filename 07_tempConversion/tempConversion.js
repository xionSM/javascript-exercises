const ftoc = function(fahrenheit) {
let fahToCel = (fahrenheit - 32) / 1.8;
let roundedFah = Math.round(fahToCel * 10) / 10;
return roundedFah
};

const ctof = function(celsius) {
let celToFah = (celsius * 1.8) + 32;
let roundedCel = Math.round(celToFah * 10) / 10;
return roundedCel
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
