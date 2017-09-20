const React = require('react');
let GreeterMessage = require('GreeterMessage');
let GreeterForm = require('GreeterForm');

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
module.exports = Greeter;
