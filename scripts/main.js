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
      var tempFahrenheitContent = +tempf + ' °F';
      var iconHTML = getIconUrl(data.weather[0].icon);
      setBackgroundImageFromIconId(data.weather[0].icon);
      fahrenheitContent.innerHTML = tempFahrenheitContent;
      currentConditions.innerHTML =  weatherDescription.replace(/\b./g, function(m){ return m.toUpperCase(); });
      weatherIconTag.src = iconHTML;
    });
  }
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
  navigator.geolocation.getCurrentPosition(getWeatherInfo, error);
});

function toFar(t) {
  return Math.round((t - 273.15) * 1.8 + 32);
}

function toCel(t) {
  return Math.round(t - 273.15);
}

function getIconUrl(iconId) {
  console.log(iconId);
  return 'http://openweathermap.org/img/w/' + iconId + '.png'
}

function setBackgroundImageFromIconId(iconId) {

  if (iconId === '01d') {
    $('#bg').css("background-image", 'url("images/BlueSky.jpg")');
  } else if (iconId === '01n') {
    $('#bg').css("background-image", 'url("images/ClearNight.jpg")');
  } else if (iconId === '02d') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '02n') {
    $('#bg').css("background-image", 'url("images/CloudsNight.jpg")');
  } else if (iconId === '03d') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '03n') {
    $('#bg').css("background-image", 'url("images/CloudsNight.jpg")');
  } else if (iconId === '04d') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '04n') {
    $('#bg').css("background-image", 'url("images/CloudsNight.jpg")');
  } else if (iconId === '09d') {
    $('#bg').css("background-image", 'url("images/Rain.jpg")');
  } else if (iconId === '09n') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '10d') {
    $('#bg').css("background-image", 'url("images/Rain.jpg")');
  } else if (iconId === '10n') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '11d') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '11n') {
    $('#bg').css("background-image", 'url("images/Clouds.jpg")');
  } else if (iconId === '13d') {
    $('#bg').css("background-image", 'url("images/Snow.jpg")');
  } else if (iconId === '13n') {
    $('#bg').css("background-image", 'url("images/SnowNight.jpg")');
  } else if (iconId === '14d') {
    $('#bg').css("background-image", 'url("images/Rain.jpg")');
  } else if (iconId === '15n') {
    $('#bg').css("background-image", 'url("images/Rain.jpg")');
  } else {
    $('#bg').css("background-image", 'url("images/Black.jpg")');
  }
}
