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
  count++;
  renderCounterApp();
  console.log('addOne', count)
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('minusOne', count)
};

const resetCount = () => {
  count = 0;
  renderCounterApp();
  console.log('resetCount', count)
}
//css class is renamed to className in JSX because class is a js reserved word


//Make button minus One and register
//Make button reset "rest" fire setup reset.



const appTemp = document.getElementById('app');
const appRoot = document.getElementById('appTwo');

ReactDOM.render(template, appTemp);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>&nbsp;
    <button onClick={minusOne}>-1</button>&nbsp;
    <button onClick={resetCount}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();
