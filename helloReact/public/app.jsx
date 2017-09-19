let GreeterMessage = React.createClass({
  render: function(){
    let name = this.props.name;
    let message = this.props.message;
    return (
      <div>
        <h1>Some {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

let GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    let value = this.refs.name.value;

    if(value.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(value);
    }

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set name</button>
      </form>
    );
  }
});

let Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function (){
    let name =  this.state.name;
    return (
      <div>
        <GreeterMessage name={name} message={this.props.message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

let name = 'Samara';

ReactDOM.render(
  <Greeter name={name} message='This is from the main component!'/>,
  document.getElementById('app')
);
