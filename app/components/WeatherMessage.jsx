let React = require('react');

let WeatherMessage = React.createClass({
  render: function () {
    let {temp, location, country} = this.props;

    return (
      <h3 className="text-center">It is {temp} in {location}, {country}!</h3>
    )
  }
});

module.exports = WeatherMessage;
