console.log('App.js is Running');

// JSX - JavaScript XML
//if statements
//ternary operators
//logical and operator

var app = {
  title: "Decision Maker App",
  subtitle: "Take the stress out of making choices",
  options: ['One', 'Two']
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <p>{app.options.length > 0 ? 'Here are your options son' : 'You have no options son'}</p>


    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);//wrapping Parenthesis only needed to help organize


//Object and properties
var user = {
  name: 'Scat Cat',
  age: '27',
  location: 'Alley'
};
//calling a function is an expression
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined; //could remove the else and return because undefined is implicit
  }

}
//the brackets are know as js expressions
// ternary operator is used to test if name exists
// logical and operator is used on age - test if there and if over 18
var newTemplate = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p> Age: {user.age}</p>}
    {getLocation(user.location)}
  </div >
);

var appTemp = document.getElementById('app');
var appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);
ReactDOM.render(newTemplate, appRoot);
