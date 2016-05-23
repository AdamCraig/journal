//business logic
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var splitBody = [];
  splitBody = this.body.split(" ");
  var wordCount = splitBody.length;
  return wordCount;
}

//user interface logic

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
