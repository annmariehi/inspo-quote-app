'use strict';
const PORT = 3000;
const quotes = require('./quotes.js');
const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const min = 0;
const max = quotes.length - 1;
function randInt() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function genQuote() {
  let currentInt = randInt();
  let currentQuote = quotes[currentInt];
  window.getElementById("quote_goes_here").innerHTML = currentQuote;
}

function writeQuote() {
fs.writeFile('./read_text_file.txt', content, err => {
    if(err) {
        console.error(err)
        return
    }
})
}

const newQuoteButton = window.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', genQuote);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});