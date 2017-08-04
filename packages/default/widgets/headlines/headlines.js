widget = {

  onData: function (el, data) {
    if (data.news && data.news.status === "ok") {

        var $content = $('.content', el);
        $content.empty();

        if (data.news.articles.length) {
          for (var i = 0; i < 6; i++) {
            var article = data.news.articles[i];
            $content.append(
                "<div class='news-story'>" +
                  "<img class='thumb' src='" + article.urlToImage + "'></img>" +
                  "<div class='title'>" + article.title + "</div>" +
                "</div>" +
                "<div class='description'>" + article.description + "</div>"
            );
          }
        }
    }
  }
};
