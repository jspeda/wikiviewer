$(document).ready(function(){
$('form').on('submit', function() {
  event.preventDefault();
  var textValue = $('input').val();
  if (textValue === '') {
    console.log('Enter text!!');
  }
  else {
    $('.results-title-container').html('');
    $('.results-container').html('');
    console.log(textValue);
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+ textValue + "&format=json&callback=?",
    function(json) {
      var search = json.query.search;
      console.log(json.query.search);
      // loop through json to populate page with content
      for (var i = 0; i < search.length; i++) {
        var urlTitle = search[i].title.replace(/ /g, "_");
        var title = $("<div class='result result-title pure-u-1-2' id='title'><a href=https://en.wikipedia.org/wiki/" + urlTitle + ">" + search[i].title + "</a></div>");
        var snippet = $("<div class='result result-snippet pure-u-1' id='snippet'>" + search[i].snippet + "</div><br />");
        $('.results-container').append(title);
        for (var j = 0; j < search.length; j++) {
          $('.results-container').append(snippet);
        }
      }
    });
  }
});
});
