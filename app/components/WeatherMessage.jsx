var React = require('react');

var WeatherMessage = ({temp, location}) => {
  //var location = props.location;
  //var temp = props.temp;

  return (
    <div>
      The weather in {location} is: {temp}
    </div>
  );
};

module.exports = WeatherMessage;
