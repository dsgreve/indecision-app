console.log('App.js is Running');

// JSX - JavaScript XML requires Babel 
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch

//if statements
//ternary operators
//logical and operator

const app = {
  title: "Decision Maker App",
  subtitle: "Take the stress out of making choices",
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <p>{app.options.length > 0 ? 'Here are your options son' : 'You have no options son'}</p>


    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
  </div>
);//wrapping Parenthesis only needed to help organize





//let is used because var count will change
let count = 0;
const addOne = () => {

};
//css class is renamed to className in JSX because class is a js reserved word
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={}>+1</button>
  </div>
);
console.log(templateTwo);

















//Object and properties
const user = {
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
const newTemplate = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p> Age: {user.age}</p>}
    {getLocation(user.location)}
  </div >
);

const appTemp = document.getElementById('app');
const appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);
ReactDOM.render(templateTwo, appRoot);
