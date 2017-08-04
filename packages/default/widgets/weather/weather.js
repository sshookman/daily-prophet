widget = {

  onData: function (el, data) {
    if (data.weather) {

        var $content = $('.weather', el);
        $content.empty();

        var textForecast = data.weather.forecast.txt_forecast.forecastday;

        if (textForecast.length) {

            textForecast.forEach(function (forecast) {
                $content.append(
                    "<div class='forecast'>" +
                      "<div class='title'>" + forecast.title + "</div>" +
                      "<div class='details'>" + forecast.fcttext + "</div>" +
                    "</div>"
                );
            });
        }
    }
  }
};
