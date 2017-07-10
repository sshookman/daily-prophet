widget = {

  onData: function (el, data) {
    if (data.news) {
      $('h2', el).text(data.news.source);
    }
  }
};
