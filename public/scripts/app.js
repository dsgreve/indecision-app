'use strict';

console.log('App.js is Running');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
); //wrapping parantheses only needed to help organize

var newTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Dale Greve'
  ),
  React.createElement(
    'p',
    null,
    'Age: 44'
  ),
  React.createElement(
    'p',
    null,
    'Location: Troy'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(newTemplate, appRoot);
'use strict';

console.log('App.js is Running');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
); //wrapping parantheses only needed to help organize

var newTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Dale Greve'
  ),
  React.createElement(
    'p',
    null,
    'Age: 44'
  ),
  React.createElement(
    'p',
    null,
    'Location: Troy'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(newTemplate, appRoot);
