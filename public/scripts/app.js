"use strict";

console.log('App.js is Running');

// JSX - JavaScript XML

var app = {
  title: "Decision Maker App",
  subtitle: "Take the stress out of making choices"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "h2",
    null,
    app.subtitle
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
); //wrapping parantheses only needed to help organize


//Object and properties
var user = {
  name: 'Fleet',
  age: '19',
  location: 'Baltimore'
};

var newTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name + '!'
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appTemp = document.getElementById('app');
var appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);
ReactDOM.render(newTemplate, appRoot);
