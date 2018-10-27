console.log('App.js is Running'); 

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
          <li>Item One</li>
          <li>Item Two</li>
        </ol>
    </div>
);//wrapping parantheses only needed to help organize

var newTemplate = (
  <div>
    <h1>Dale Greve</h1>
    <p>Age: 44</p>
    <p>Location: Troy</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(newTemplate, appRoot);