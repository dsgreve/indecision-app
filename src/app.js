console.log('App.js is Running');

// JSX - JavaScript XML

var app = {
  title: "Decision Maker App",
  subtitle: "Take the stress out of making choices"
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);//wrapping parantheses only needed to help organize


//Object and properties
var user = {
  name: 'Fleet',
  age: '19',
  location: 'Baltimore'
}

var newTemplate = (
  <div>
    <h1>{user.name + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appTemp = document.getElementById('app');
var appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);
ReactDOM.render(newTemplate, appRoot);
