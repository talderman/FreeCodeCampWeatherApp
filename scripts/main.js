$(document).ready(function () {
  var output = document.getElementById("currentTemp");
  var fahrenheitContent = document.getElementById("tempFahrenheit");
  var currentConditions = document.getElementById("currentConditions");
  var weatherIconTag = document.getElementById("weatherIcon");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function getWeatherInfo(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=ff4a70d500eff7781a88ee7219835367";

    $.getJSON(url, function (data) {
      var tempf = toFar(Math.round(data.main.temp));
      var tempc = toCel(Math.round(data.main.temp));
      var weatherDescription = data.weather[0].description;
      var tempFahrenheitContent = +tempf + ' °F'
      var iconHTML = getIconUrl(data.weather[0].icon);

      fahrenheitContent.innerHTML = tempFahrenheitContent;
      currentConditions.innerHTML = capitalizeFirstLetter(weatherDescription);
      weatherIconTag.src = iconHTML;
    });
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  navigator.geolocation.getCurrentPosition(getWeatherInfo, error);
});

function toFar(t) {
  return Math.round((t - 273.15) * 1.8 + 32);
}

function toCel(t) {
  return Math.round(t - 273.15);
}

function getIconUrl(iconId) {
  return 'http://openweathermap.org/img/w/' + iconId + '.png'
}

function getBackgroundImageUrl(iconId) {
  var backgroundImageUrl = '';

  switch (iconId) {
    case '01d':
      return '';
      break;
    case '01n':
      return '';
      break;
    case '02d':
      return '';
      break;
    case '02n':
      return '';
      break;
    case '03d':
      return '';
      break;
    case '03n':
      return '';
      break;

    default:
      return '';
      break;

  }
  return '';
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
