"use strict";

<<<<<<< HEAD
console.log('App.js is Running');

// JSX - JavaScript XML requires Babel 
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch

//if statements
//ternary operators
//logical and operator

var app = {
  title: "Decision Maker Application",
  subtitle: "Take the stress out of making choices",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  } else {
    alert('Please enter an option');
  }
  renderFormEntry();
=======
//arguements object - no longer bound with arrow functions

// es5 example of arguements
var add = function add(a, b) {
    return a + b;
};
console.log(add(10, 30));

//es6 example - if you require arguements use
var addTwo = function addTwo(a, b) {
    return a + b;
};

console.log(addTwo(10, 15));

//this keyword is - no longer bound
// es5 example uses that = this as a work around for binding This
var user = {
    name: 'Scott',
    cities: ['Troy', 'Muskegon', 'Whitehall', 'Marquette'],
    printPlacesLived: function printPlacesLived() {
        var that = this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

// ES6 Arrow function example - arrow function does not bind its own this value 
// You wouldn't use arrow function in a method
var reader = {
    name: 'Scott',
    books: ['American Gods', 'IT', 'Leviathan', 'The Bad Place'],
    printBooksRead: function printBooksRead() {
        var _this = this;

        //es6 method
        //Map is an array method like forEach
        //Foreach allows you to get each item, Map allows you to transform each item
        return this.books.map(function (book) {
            return _this.name + ' has read ' + book;
        });
        //short hand expression

        //for each lop example
        //this.books.forEach((book) => {
        //console.log(this.name + ' has read ' + book);
        //});
    }
>>>>>>> fa6e7eac0fb98e88717eb4f5dabd8891b2b83d38
};
console.log(reader.printBooksRead());

<<<<<<< HEAD
//create remove all button
//onclick handler removes all options

var wipeArray = function wipeArray() {
  if (app.options != '') {
    app.options = [];
    console.log(app.options);
    renderFormEntry();
  } else {
    alert('Nothing to remove');
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('appTwo');

{/* const numbers = [55, 101, 1000] */}

var renderFormEntry = function renderFormEntry() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "h2",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'Here are your options' : 'You have no options son'
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: wipeArray },
      "Remove Options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          " Would you like to ",
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  ); //wrapping Parenthesis only needed to help organize

  ReactDOM.render(template, appRoot);
};
renderFormEntry();
=======
// Challenge
// numbers - array of numbers
// muliplyBy - single number
// muliply - return new arrow whare numbers have been mulitplied
var multiplier = {
    numbers: [2, 4, 6],
    muliplyBy: 800,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.muliplyBy;
        });
    }
};

console.log(multiplier.multiply());
>>>>>>> fa6e7eac0fb98e88717eb4f5dabd8891b2b83d38
