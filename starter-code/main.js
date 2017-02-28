//WDI Fundamentals Memory Game Tutorial

// created the array that simulated the cards in the game
var cards =["queen","queen","king","king"];
//cards clicked in play
var cardsInPlay = [];

//find the board in html file and set it to variable
var board = document.getElementById("game-board"); 
//function that creates the board
var createGameBoard = function (x) {
// loop through the cards array
  for (var i = 0; i < x; i++) {
  // this creates a div element to be used as a card
   var cardElement = document.createElement("div");
  // creates the class "card" in html file 
   cardElement.className = "card";
  //set the card's attribute 'data-card' and set it to the element of the array, ex. 'king'
   cardElement.setAttribute('data-card', cards[i]);
//function isTwoCards will be executed when a card is clicked
   cardElement.addEventListener('click', isTwoCards)
// append card to the board
   board.appendChild(cardElement);

  }

}

// this function flips the card 
var isTwoCards = function () {
  // this refers to the card being clicked during the eventListener 
  cardsInPlay.push(this.getAttribute('data-card'));
  // decide which image to display & show the card's image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute("data-card") === "king") {
  //set the cardElement's inner HTML to an image of either a king or a queen
  //?????? how to add a CSS selector using javascript that targets your img elements and gives them a height/width if the images you use are very large?
    this.innerHTML = "<img src='images/king.png' alt='king'>";
  } else {
    this.innerHTML = "<img src='images/queen.png' alt='queen'>";
  }
  // if two cards in play check for a match 
  if (cardsInPlay.length === 2) {
    //if it's a match, run isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }

}

// this function checks for a match 
var isMatch = function (cards) {
  // winning message 
  if (cards[0] === cards[1]) {
    alert("It's a match!");
  } else {
    //try again message
    alert("Sorry, try again");
  }

}

createGameBoard(6);

//cards of the game
// var cards = ["queen", "queen", "king", "king", "king", "king", "queen", "queen"];
//cards in play
// var cardsInPlay = [];
// identify the board and set it to variable
// var board = document.getElementById("game-board");
// function that creates the cards on the board
// var createGameBoard = function () {
// loop through the cards array
// for (var i = 0; i < cards.length; i++) {
  // this creates a div element to be used as a card
  // var cardElement = document.createElement("div");
  // creates the class "card" in html file 
  // cardElement.className = "card";
  
  // cardElement.setAttribute('data-card', cards[i]);
  // function isTwoCards will be executed when a card is clicked
  // cardElement.addEventListener('click', isTwoCards);
// append card to the board
//   board.appendChild(cardElement);

// }

// }
// createGameBoard();






