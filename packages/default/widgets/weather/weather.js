widget = {

  onData: function (el, data) {
    if (data.weather) {

        var $content = $('.weather', el);
        $content.empty();

        var forecasts = data.weather.forecast.simpleforecast.forecastday;

        if (forecasts.length) {

            forecasts.forEach(function (forecast) {
                $content.append(
                    "<div class='forecast'>" +
                      "<div class='date'>" + forecast.date.weekday + ", " + forecast.date.monthname + " " + forecast.date.day + "</div>" +
                      "<div class='conditions'>" + forecast.conditions + "</div>" +
                      "<img class='icon' src='" + forecast.icon_url + "'></img>" +
                      "<div class='temp'>" + forecast.low.fahrenheit + " - " + forecast.high.fahrenheit + "</div>" +
                    "</div>"
                );
            });
        }
    }
  }
};
