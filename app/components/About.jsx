 let React = require('react');

let About = React.createClass({
  render: function () {
    return (
      <div className="">
        <h1 className="text-center">About</h1>
        <p>This is weather application built using React!</p>
        <p>Tools used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - was used to search for weather data by city name.
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = About;
