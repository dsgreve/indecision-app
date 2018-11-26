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
    return fullName.split(' ')[2];
}

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Steve Smith'));
console.log(getLastName('Mike Rogers'));
console.log(getLastName('Sleepy Hollow Dope') + getFirstName('Ted Turner'));