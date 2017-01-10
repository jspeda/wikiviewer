$(document).ready(function(){
$('form').on('keyup', function(event) {
  event.preventDefault();
  let textValue = $('input').val();
  if (textValue === '') {
    console.log('Enter text!!');
  }
  else {
    setTimeout(getResults, 400);
    function getResults() {
      $('.results-title-container').html('');
      $('.results-container').html('');
      console.log(textValue);
      $.getJSON(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=
      ${textValue}&format=json&callback=?`,
      function(json) {
        const search = json.query.search;
        console.log(json.query.search);
        search.map(function(result) {
          const urlTitle = result.title.replace(/\s/g, "_");
          const title = $(`<div class='result result-title pure-u-1-2' id='title'>
            <a href=https://en.wikipedia.org/wiki/${urlTitle}>${result.title}</a></div>`);
          const snippet = $(`<div class='result result-snippet pure-u-1' id='snippet'>
            ${result.snippet}</div><br />`);
          return $('.results-container').append(title).append(snippet);
        });
      });
    }
  }
});
});
