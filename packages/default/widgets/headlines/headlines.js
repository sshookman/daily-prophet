widget = {

    onData: function (el, data) {
        if (data.news && data.news.status === "ok") {

            var $content = $('.content', el);
            $content.empty();

            for (var i = 0; i < data.news.articles.length; i++) {
                var article = data.news.articles[i];
                if (i % 2 == 0) {
                    $content.append(
                        "<div class='news-story'>" +
                        "<img class='thumb' src='" + article.urlToImage + "'></img>" +
                        "<div class='title'>" + article.title + "</div>" +
                        "</div>"
                    );
                } else {
                    $content.append(
                        "<div class='news-story'>" +
                        "<div class='title'>" + article.title + "</div>" +
                        "<img class='thumb' src='" + article.urlToImage + "'></img>" +
                        "</div>"
                    );
                }
            }
        }
    }
};
