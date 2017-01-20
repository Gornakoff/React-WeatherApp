let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let ErrorModal = require('ErrorModal');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location)
      .then(function(data) {
        console.log(data);
        that.setState({
          location: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          isLoading: false
        })
      })
      .catch(function(e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
  },
  render: function () {
    let {isLoading, temp, location, country, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} country={country}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
