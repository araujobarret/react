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

    let name = this.refs.name.value;
    let message = this.refs.message.value;

    if(name.length > 0 && message.length > 0){
      this.refs.name.value = '';
      this.refs.message.value = '';
      this.props.onNewData(name, message);
    }

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/>
        <br/>
        <textarea ref="message" placeholder="Enter message"></textarea>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

let Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(name, message) {
    this.setState({
      name,
      message
    });
  },
  render: function (){
    let name =  this.state.name;
    let message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
