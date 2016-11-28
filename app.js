$(document).ready(function(){

var textValue;

$('#text_val').click(function() {
  event.preventDefault();
  textValue = $('input').val();
  if (textValue === '') {
    console.log('Enter text!!');
  }
  else {
    console.log(textValue);
    // $.ajax({
    //     type: "GET",
    //     url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+ textValue + "&callback=?",
    //     contentType: "application/json; charset=utf-8",
    //     async: false,
    //     dataType: "json",
    //     success: function (data, textStatus, jqXHR) {
    //         console.log(data);
    //         var markup = data.parse.text["*"];
    //         var blurb = $('<div></div>').html(markup);
    //         $('#article').html($(blurb).find('p'));
    //     },
    //     error: function (errorMessage) {
    //     }
    // });

  // this one works
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
    // $('#article-name').html(json.query.search[0].title);
    // $('#article-snippet').html(json.query.search[0].snippet);
    // $('#article-name-2').html(json.query.search[1].title);
    // $('#article-snippet-2').html(json.query.search[1].snippet);
    });
  }
});

});
