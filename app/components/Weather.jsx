let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
      .then(function(temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        })
      })
      .catch(function(err) {
        that.setState({isLoading: false});
        alert(err);
      });
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
  },
  render: function () {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h3>Weather component!</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
