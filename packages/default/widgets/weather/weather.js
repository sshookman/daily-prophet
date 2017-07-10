widget = {

  onData: function (el, data) {
    console.log(data);
    if (data) {
      $('h2', el).text(data);
    }
  }
};
