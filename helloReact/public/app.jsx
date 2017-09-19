let Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    console.log(this.refs.name);
    alert(name);
  },
  render: function (){
    let name =  this.props.name;
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
