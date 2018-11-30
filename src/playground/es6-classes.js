
//when working with classes its common to capitalize the first letter
/* Define Constructor function in class to access data - no comma after closing curly brace */

/* setup constructor to take name and age - default to 0 */
/* setup method to get description - Name is age years old */
class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
    getGreeting() {
        // return 'Hi! I am ' + this.name + '!'; -- ES 5 method 
        return `Hi. I am ${this.name} !`; // ES6 template string
    }

}

const me = new Person('Scott', 50);
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());