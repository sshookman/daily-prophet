widget = {
  onData: function (el, data) {

    console.log(data);
    var index = Math.floor(Math.random() * 2);
    console.log(index);
    story = data.stories[index];
    console.log(story);

    var $content = $('.content', el);
    $content.empty();

    $content.append(
        "<div class='story'>" +
        "<img class='gif' src='/widgets/resources?resource=default/story/" + story.file + "'>" +
        "<div class='passage'>" + story.passage + "</div>" +
        "</div>"
    );
  }
};
