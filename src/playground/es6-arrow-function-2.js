//arguements object - no longer bound with arrow functions

// es5 example of arguements
const add = function(a, b) {
    return a + b;
};
console.log(add(10,30));

//es6 example - if you require arguements use
const addTwo = (a, b) => {
    return a + b;
};

console.log(addTwo(10,15));

//this keyword is - no longer bound
// es5 example uses that = this as a work around for binding This
const user = {
    name: 'Scott',
    cities: ['Troy', 'Muskegon', 'Whitehall', 'Marquette'],
    printPlacesLived: function () {
        const that = this;
        console.log(this.name);
        console.log(this.cities);
        
        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

// ES6 Arrow function example - arrow function does not bind its own this value 
// You wouldn't use arrow function in a method
const reader = {
    name: 'Scott',
    books: ['American Gods', 'IT', 'Leviathan', 'The Bad Place'],
    printBooksRead() { //es6 method
        //Map is an array method like forEach
        //Foreach allows you to get each item, Map allows you to transform each item
        return this.books.map((book) => this.name + ' has read ' + book);
        //short hand expression

        //for each lop example
        //this.books.forEach((book) => {
            //console.log(this.name + ' has read ' + book);
        //});
    }    
};
console.log(reader.printBooksRead());

// Challenge
  // numbers - array of numbers
  // muliplyBy - single number
  // muliply - return new arrow whare numbers have been mulitplied
const multiplier = {
  numbers: [2, 4, 6],
  muliplyBy: 800,
  multiply() {
    return this.numbers.map((number) => number * this.muliplyBy);
  }
  
};

console.log(multiplier.multiply());