
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
        return `Hi I am ${this.name}. I am ${this.age} years old.`
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
            description += ` My major is ${this.major}.`;
        }
        return description;
    }
}

//Add support for homeLocation
//Override getGreeting
//1. Hi I am scott greve.  I am visting from Detrtoit
//2. No location just just Parent string

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getDescription(){
        let description = super.getDescription();
        
        if(this.homeLocation) {
            description += ` I am visiting from ${this.homeLocation}.`;
        }
        return description;
    }
}

/* Because Student extends Person we call access Person properties by calling Student */
const me = new Traveler('Scott', 50, 'Detroit');

console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());