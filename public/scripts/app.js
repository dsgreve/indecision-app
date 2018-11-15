"use strict";

console.log('App.js is Running');

// JSX - JavaScript XML
//if statements
//ternary operators
//logical and operator

var app = {
  title: "Decision Maker App",
  subtitle: "Take the stress out of making choices",
  options: ['One', 'Two']
};

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
    app.options.length > 0 ? 'Here are your options son' : 'You have no options son'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
); //wrapping Parenthesis only needed to help organize


//Object and properties
var user = {
  name: 'Scat Cat',
  age: '27',
  location: 'Alley'
};
//calling a function is an expression
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return undefined; //could remove the else and return because undefined is implicit
  }
}
//the brackets are know as js expressions
// ternary operator is used to test if name exists
// logical and operator is used on age - test if there and if over 18
var newTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    " Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appTemp = document.getElementById('app');
var appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);
ReactDOM.render(newTemplate, appRoot);
