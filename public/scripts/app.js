console.log('App.js is loaded and running');

// JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "h1",
    { id: "someId" },
    "Something wicket this way comes"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
