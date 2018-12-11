//extending Reach.Component gives us all features of react
//React component enforce the Capitalization method of component names - to differentiate between html elements
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of an App!!';
    const options = ['Thing One', 'Thing Two', 'Thing Three'];


    return (
      <div>
        <Header title={title} subTitle subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Gotta pick em all');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  //keeps binding rendered from beginning so it does not need to be bound inline each time
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    //alert('Are you sure you want to Remove all options');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAlls}>Remove all</button>
        {
          this.props.options.map((optionArg) => <p key={optionArg}>{optionArg}</p>)
        }
        {
          this.props.options.map((optionB) => <Option key={optionB} optionText={optionB} />)
        }
        <p>{this.props.options.length}</p>
        <p>{this.props.options[1]}</p>

        <br></br>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p><strong>
        {this.props.optionText}
      </strong>
      </p>
    );
  }
}

//1. Setup Form with Text input and submit
//2. wire up onSubmit
//3. handleAddOption -> fetch value typed -> if exists then alert



class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
      alert(option);
    } else {
      alert('Please enter some input')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>

      </div>
    );
  }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));