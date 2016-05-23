exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
}

exports.Entry.prototype.countWords = function() {
  var splitBody = [];
  splitBody = this.body.split(" ");
  var wordCount = splitBody.length;
  return wordCount;
};
