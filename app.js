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

  // $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+ textValue + "&callback=?",
  //   function(json) {
  //     console.log(json.parse.text['*']);
  //   });
  // $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+ textValue + "&limit=5&format=json&callback=?",
  //   function(json) {
  //     console.log(json);
  //   });

  // this one works
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+ textValue + "&format=json&callback=?",
    function(json) {
      console.log(json.query.search[0]);
    });
  }
});
});
