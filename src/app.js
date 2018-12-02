//extending Reach.Component gives us all features of react
//React component enforce the Capitalization method of component names - to differentiate between html elements
class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of an App</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <ul>
      <li>Sunbathing</li>
      <li>Sailing</li>
      <li>Fishing</li>
      </ul>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return(
      <p>Enter your options here:</p>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));