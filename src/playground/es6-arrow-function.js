const square = function (x) {
    return x * x;
};


//es6 arrow functions are always anonymous
const squareArrow = (x) => {
    return x * x;
};

const squareArrrowEsp = (x) => x * x;


console.log(square(3));
console.log(squareArrow(4));
console.log(squareArrrowEsp(5));


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));