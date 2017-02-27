// console.log("JS file is connected to HTML! Woo!")

// created variables that simulated the cards in the game
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king"; 
// var cardFour = "king"; 
//cards of the game
var cards = ["queen", "queen", "king", "king"];
//cards in play
var cardsInPlay = [];
// identify the board and set it to variable
var board = document.getElementById("game-board");
// function that creates the cards on the board
var createGameBoard = function () {
// loop through the cards array
for (var i = 0; i < cards.length; i++) {
  // this creates a div element to be used as a card
  var cardElement = document.createElement("div");
  cardElement.className = "card";
  
  cardElement.setAttribute('data-card', cards[i]);
  // function isTwoCards will be executed when a card is clicked
  cardElement.addEventListener('click', isTwoCards);
// append card to the board
  board.appendChild(cardElement);
  board.appendChild(cardElement);
}

}

// function isTwoCards() {
//   // add card to array of cards being viewed
//   // 'this' is not covered in the pre-work but
//   // for now, just know it gives you access to the cardElement you click on
//   cardsInPlay.push(this.getAttribute('data-card'));
//   // show the card's image
//   console.log(this.getAttribute('data-card'));
//   if (this.getAttribute('data-card') === 'king') {
//     this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
//   } else {
//     this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
//   }
//   // if you have two cards in play check for a match
//   if (cardsInPlay.length === 2) {
//     // pass the cardsInPlay as an argument to isMatch function
//     isMatch(cardsInPlay);
//     // clear cards in play array for next try
//     cardsInPlay = [];
//   }
// }

// function isMatch(cards) {
//   // alert winning message
//   if (cards[0] === cards[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");

//   }
// }

// createGameBoard();



// if (cardTwo === cardFour) {
//    alert("Sorry, try again.");
// } else if (cardTwo === cardOne) {
//   alert("You found a match!");
// } else if (cardThree === cardOne) {
//   alert("Sorry, try again.");
// } else if (cardThree === cardFour) {
//   alert("You found a match!");
// }


// if (cardOne == cardTwo || cardThree == cardFour) {
//    console.log("It's a match");
// } else {
//   console.log("Try Again");
// }

