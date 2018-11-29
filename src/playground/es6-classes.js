
//when working with classes its common to capitalize the first letter
/* Define Constructor function in class to access data - no comma after closing curly brace */
class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGreeting() {
        // return 'Hi! I am ' + this.name + '!'; -- ES 5 method 
        return `Hi. I am ${this.name} !`; // ES6 template string
    }

}

const me = new Person('Scott');
console.log(me.getGreeting());
const other = new Person();
console.log(other.getGreeting());