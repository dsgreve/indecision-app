console.log('App.js is Running');

// JSX - JavaScript XML requires Babel 
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch

//if statements
//ternary operators
//logical and operator

const app = {
  title: "Decision Maker Application",
  subtitle: "Take the stress out of making choices",
  options: []
}



const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

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

const wipeArray = () => {
  if (app.options != '') {
    app.options = [];
    console.log(app.options);
    renderFormEntry();
  } else {
    alert('Nothing to remove')
  }

};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('appTwo');

{/* const numbers = [55, 101, 1000] */ }

const renderFormEntry = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options son'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={wipeArray}>Remove Options</button>

      {
        /*
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
        */
      }

      <ol>
        {/* Comment in JSX */}
        {
          app.options.map((option) => {
            return <li key={option}> Would you like to {option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>

  );//wrapping Parenthesis only needed to help organize

  ReactDOM.render(template, appRoot);
};
renderFormEntry();