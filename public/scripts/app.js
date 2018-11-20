"use strict";

console.log('App.js is Running');

// JSX - JavaScript XML requires Babel 
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch

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
    ),
    React.createElement(
      "li",
      null,
      "Item Three"
    )
  )
); //wrapping Parenthesis only needed to help organize


//let is used because var count will change
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('minusOne', count);
};

var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
  console.log('resetCount', count);
};
//css class is renamed to className in JSX because class is a js reserved word


//Make button minus One and register
//Make button reset "rest" fire setup reset.


var appTemp = document.getElementById('app');
var appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    "\xA0",
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    "\xA0",
    React.createElement(
      "button",
      { onClick: resetCount },
      "reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
