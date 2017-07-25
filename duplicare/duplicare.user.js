// ==UserScript==
// @name        Duplicare
// @namespace   https://piazza.com
// @description Searches for possible duplicate questions when writing a new post on Piazza.
// @author      Allan Reyes
// @include     https://piazza.com/*
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

// Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);

/**
 * Sets a 'keyup' event for the `post_summary` input field
 * to trigger the search for related posts.
 *
 * This is where the magic happens!
 */
function setPostSummaryEvent() {
  var postSummary = $('#post_summary');

  postSummary.keyup(function () {
    var text = postSummary.val();
    mimicPiazzaSearchUX(text);
    triggerPiazzaSearch(text);
  });
}

/**
 * Imitates Piazza real search experience to avoid leaving
 * the user in an inconsistent state.
 * @param {String} text - The search text
 */
function mimicPiazzaSearchUX(text) {
  // Write to the search field
  $('#search-box').val(text);
  // Display the button for clearing the search
  $('#clear-search-button').show();
}

/**
 * Initiates the search for related posts on Piazza
 * @param {String} text - The search text
 */
function triggerPiazzaSearch(text) {
  // `P` is a Piazza internal variable
  // I discovered this while exploring their scripts
  P.feed.search(text);
}

$(document).ready(function () {
  // Look for the `post_summary` HTML element
  // and attach an event to listen for text changes
  // See: http://tinyurl.com/y7s883re
  waitForKeyElements('#post_summary', setPostSummaryEvent);
});