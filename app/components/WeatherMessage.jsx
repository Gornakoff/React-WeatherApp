let React = require('react');

let WeatherMessage = React.createClass({
  render: function () {
    let {temp, location} = this.props;

    return (
      <h3 className="text-center">It is {temp} in {location}!</h3>
    )
  }
});

module.exports = WeatherMessage;
