const React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    location = encodeURIComponent(location);
    if(location.length > 0){
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + location;
    }
  },
  render: function() {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city" ref="location"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
  }
});

module.exports = Nav;

var old = (
  <div>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
);
