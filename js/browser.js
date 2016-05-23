var Entry = require('./../js/journal.js').Entry;
$(document).ready(function(){
  $('#journalEntry').submit(function(event){
    event.preventDefault();
    var entryTitle = $('#entryTitle').val();
    var body = $('#body').val();
    var newEntry = new Entry(entryTitle, body);
    var newWordCount = newEntry.countWords();

    $('.output').append("<li>" + entryTitle + "<br>" + body + "<br>" + newWordCount + "</li>");
  });
});
