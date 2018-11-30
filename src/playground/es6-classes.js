
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
/** super refers to the parent  */
class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
        //!! flips this to be a true/false statement
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

/* Because Student extends Person we call access Person properties by calling Student */
const me = new Student('Scott', 50, 'Computer Science');

console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());