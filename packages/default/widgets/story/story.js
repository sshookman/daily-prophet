widget = {
  onData: function (el, data) {

    console.log(data);
    var index = Math.floor(Math.random() * 2);
    console.log(index);
    story = data.stories[index];
    console.log(story);

    var $content = $('.content', el);
    $content.empty();

    if (story.passage_top) {
        $content.append(
            "<div class='story'>" +
            "<div class='top'>" +
            "<img class='gif' src='/widgets/resources?resource=default/story/" + story.file + "'>" +
            "<span class='passage_top'>" + story.passage_top + "</span>" +
            "</div>" +
            "<div class='passage'>" + story.passage + "</div>" +
            "</div>"
        );
    } else {
        $content.append(
            "<div class='story'>" +
            "<img class='gif' src='/widgets/resources?resource=default/story/" + story.file + "'>" +
            "<div class='passage'>" + story.passage + "</div>" +
            "</div>"
        );
    }
  }
};
