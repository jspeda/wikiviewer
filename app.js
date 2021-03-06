$(document).ready(function(){

  $('form').on('keyup', function(event) {
    let textValue = $('input').val();
    if (textValue === '') {
      $('.results-container').html('');
    }
    else {
      setTimeout(function() {
        getResults(textValue);
      }, 150);
    }
  });

  function getResults(searchTerm) {
    $('.results-title-container').html('');
    $('.results-container').html('');
    $.getJSON(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=
    ${searchTerm}&format=json&callback=?`,
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
});
