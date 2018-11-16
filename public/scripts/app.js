'use strict';

var square = function square(x) {
    return x * x;
};

//es6 arrow functions are always anonymous
var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrrowEsp = function squareArrrowEsp(x) {
    return x * x;
};

console.log(square(3));
console.log(squareArrow(4));
console.log(squareArrrowEsp(5));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
