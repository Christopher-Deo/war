
import Deck from './deck.js';


//calling and creating the function that starts the game

let player1Deck, player2Deck, stop = undefined; //declaring unassigned variables
let inPlay = false;
const p1DeckElem = document.querySelector('#p1Deck')
const p1PlayedCardsElem = document.querySelector("#p1PlayedCards")
const p2DeckElem = document.querySelector("#p2Deck")
const p2PlayedCardsElem = document.querySelector("#p2PlayedCards")

const text = document.querySelector(".text")



function startGame() {  //builds and shuffles a new deck when game is started
  const deck = new Deck()
  deck.shuffleDeck()
  //code below splits the deck exactly in half since there are only 2 players
  const deckMidpoint = Math.ceil(deck.remainingCards / 2); //Math.ceil ensures that only a full card (integer) is passed when the total dividing by 2 is odd.
  player1Deck = deck.cards.slice(0, deckMidpoint);
  player2Deck = deck.cards.slice(deckMidpoint, deck.numberOfCards);
  let gameInProgress = true;
  while (gameInProgress) {
    //pulling first card from each player's deck
    let p1Card = player1Deck.shift();
    let p2Card = player2Deck.shift();

    // building the comparison of index value to determine winning card
    if (p1Card.point > p2Card.point) {
      player1Deck.push(p1Card);
      text.innerText= `Player 1 wins! ${p1Card.value} is greater than ${p2Card.value}`
      console.log(`Player 1 wins! ${p1Card.value} is greater than ${p2Card.value}`)
    } else if (p1Card.point < p2Card.point) {
      player2Deck.push(p2Card);
      text.innerText= `Player 2 wins! ${p2Card.value} is greater than ${p1Card.value}`
      console.log(`Player 2 wins! ${p2Card.value} is greater than ${p1Card.value}`)
    } else {
      console.log(`Tie! No Points Awarded! ${p2Card.value} is the same as ${p1Card.value}`)
    }

    //creating statement to contine the game
    if (player1Deck.length === 0) {
      text.innerText = "Player 2 Wins The Game!"
      console.log('Player 2 Wins the Game!')

      gameInProgress = false;
    } else if (player2Deck.length === 0) {
      text.innerText = "Player 1 Wins The Game!"
      console.log('Player 1 Wins The Game!')
      gameInProgress = false;
    } else {
      text.innerText = "Next Round"
      console.log('Next Round')
    }
  }
}

let deal = document.getElementById("dealBtn")
  deal.addEventListener("click", startGame);
//calling the function that starts the game
// window.onload = startGame;   //refrences the start game function but not executing it
