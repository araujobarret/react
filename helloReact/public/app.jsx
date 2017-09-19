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
  onButtonClick: function(e) {
    e.preventDefault();

    let nameRef = this.refs.name;

    if(typeof nameRef.value === 'string' && nameRef.value.length > 0){
      this.setState({
        name: nameRef.value
      });
      this.refs.name.value = '';
    }
  },
  render: function (){
    let name =  this.state.name;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{this.props.message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>
    );
  }
});

let name = 'Samara';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
);
