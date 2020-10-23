//welcome message
var salutation = 'Hello, ';
var greeting = salutation + 'Have you ever......had to reglue a hanging file folder because the metal glide fell apart, or the folder ripped because it wouldn\'t support the weight?  Check out the recommendation below for why I feel the Pendaflex Folders are the "best" on the market.';
var greetingEl = document.getElementById("greeting");
greetingEl.textContent = greeting;

//Returns today's date, formatted
var getTodaysDate = function() {
    var today = new Date ();
    return today.toLocaleDateString();
}

var todaysDate = getTodaysDate();
var dateEl = document.getElementById("date");
dateEl.textContent = todaysDate;

