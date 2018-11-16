// JSX - JavaScript XML requires Babel 
// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js--presets=env, react --watch

var nameVar = 'Ted';
var nameVar = 'Bill'
console.log('nameVar', nameVar);

//let nameLet = 'Jen';
let nameLet = 'Stacey';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = "Scott";
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Cita Greve';

let firstName;

if (fullName) {
    //var firstName = fullName.split(' ')[0];
    firstName = fullName.split(' ')[0];
    //console.log(firstName);
    console.log(firstName);

}

//console.log(firstName);
console.log(firstName);