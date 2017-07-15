widget = {

  onData: function (el, data) {
    if (data.news && data.news.status === "ok") {
      
        var $content = $('.content', el);
        $content.empty();

        if (data.news.articles.length) {
          data.news.articles.forEach(function (article) {
            $content.append(
                "<div class='news-story'>" +
                  "<div class='title'>" + article.title + "</div>" +
                  "<div class='description'>" + article.description + "</div>" +
                "</div>"
            );
          })
        }
    }
  }
};
