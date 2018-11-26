"use strict";

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
};

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
