const React = require('react');

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

module.exports = GreeterForm;
