(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
