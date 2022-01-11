const palindromes = function (string) {
let re = /([.,!])/gi;
let newString = string.replace(re, "");
let newArray = newString.split("");
let reverseArray = newArray.reverse();
let arrayJoin = reverseArray.join('');
let arrayReplace = arrayJoin.replace(/ /g, "");
console.log(arrayReplace);
let stringReplace = newString.replace(/ /g, "");
console.log(stringReplace);

if (stringReplace.toLowerCase() === arrayReplace.toLowerCase()) {
    return true
} else {
    return false
}
};

// Do not edit below this line
module.exports = palindromes;
