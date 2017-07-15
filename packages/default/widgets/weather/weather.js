widget = {

  onData: function (el, data) {
    if (data.weather) {
      
        var $content = $('.content', el);
        $content.empty();

        var textForecast = data.weather.forecast.txt_forecast.forecastday;

        if (textForecast.length) {
            
            $content.append("<ul class='weather-forecast'>");
            textForecast.forEach(function (forecast) {
                $content.append(
                    "<li class='forecast'>" +
                      "<div class='title'>" + forecast.title + "</div>" +
                      "<div class='details'>" + forecast.fcttext + "</div>" +
                    "</li>"
                );
            })
            $content.append("</ul>");
        }
    }
  }
};
