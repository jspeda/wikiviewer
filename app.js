$(document).ready(function(){

var searched = document.getElementById('searchbox').value;

    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));
        },
        error: function (errorMessage) {
        }
    });
});
