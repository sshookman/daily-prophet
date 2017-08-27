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
                      "<div class='title'>" + forecast.date.weekday + ", " + forecast.date.monthname + " " + forecast.date.day + "</div>" +
                      "<img class='thumb' src='" + forecast.icon_url + "'></img>" +
                      "<div class='details'>" + forecast.conditions + "</div>" +
                      "<div class='details'>High " + forecast.high.fahrenheit + "°</div>" +
                      "<div class='details'>Low  " + forecast.low.fahrenheit + "°</div>" +
                    "</div>"
                );
            });
        }
    }
  }
};
