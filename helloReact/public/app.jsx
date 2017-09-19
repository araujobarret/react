let Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is from the component.'
    };
  },
  render: function (){
    let name =  this.props.name;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

let name = 'Samara';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
);
