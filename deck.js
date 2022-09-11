/*This file is set up this way to make it modular.  This way it can be used again in 
any other card game I attempt to recreate through code. in the future */

// importing the card class into this page
// import Card from './card.js';

/*first I need to create two arrays holding the suits and the card values. 
next I need to create a class called "deck" that will contain all the properties
and methods needed to create, shuffle, and deal a deck of cards.
    Contents of the class Deck:
    √1: constructor
       √ 2: properties (card, suit,)
        3: methods:
           √ 1: create a fresh deck - freshDeck() ----- might be better placed inside the Card class????
           √ 2: shuffle that deck - shuffleDeck()
            3: split the deck equally among each player
           √ 4: deal cards - dealCards()
          √  5: capture won cards - takeCards()
          √  6: create getter functions to store frequently used data - get remainingCards(), get Color().

next I need to create another class called "card"
    Contents of the class Card:
      √  1: constructor
      √  2: card properties (suit, value)
      √  3: methods
          √  1:  cleanDeck() - from list above.  -----> had to be placed outside of the classes to work properly
          √  2: a function to pull in the suits, values into each card - buildCard() ?? 
          √  3: access HTML elements and manipulate their data - getHTML1, getHTML2 ---> created 2 divs for played cards, one for each player*/

  
            //Declaring the global variables that will be used in the Card class    
//setting up the images/icons for the standard suits
const suits = ["♠", "♣", "♥", "♦"]

// setting up an array to hold custom suit images instead of the standard suit icons*/
// const suits = new Array;
// inserting the images into the empty array created above
// suits[0] = new Image();  //Image() is a built in method in JS.
// suits[0].src = './images/angry-mushroom.png';  //assigns the image in this file to index [0] of suits array

// suits[1] = new Image();
// suits[1].src = './images/star.png';

// suits[2] = new Image();
// suits[2].src = './images/winged-cube.png';

// suits[3] = new Image();
// suits[3].src = './images/spiked-turtle.png';
// suits is now an array of custom images to be used in place of the standard card suits...trying something creative to see if it works!

const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
               
/* Start of the Deck class.  */

export default class Deck{  //only need card as param and move the function to methods area

  constructor(){
        this.cards = suits.flatMap(suit => {  /*flatMap() method breaks down an array containing 
            other arrays into one array. so [[1,2], [3,4]] becomes [1,2,3,4]*/
            return values.map( (value, index) => {  //using index as point value compairison
              return new Card(suit, value, index)
            })
          });        
    }

     
    get remainingCards() {  //encapsulates the a block of code into one method to be used later
        return this.cards.length
      }
    
    shuffleDeck(){
        for(let i = this.remainingCards - 1; i > 0; i--){
            let newIndex = Math.floor(Math.random() * (i + 1)); //creates max randomness in shuffled deck
            let oldIndex = this.cards[newIndex];  //declares OldIndex as the array newIndex
                 this.cards[newIndex] = this.cards[i];  //value of newIndex is assigned to the current index of the cards array.
                 this.cards[i] = oldIndex;   //swapps the indexes of the array much like a dealer rotating the cards throughout the deck when shuffling cards
        }
    }

    dealCard() {   //simulates dealing a card from the top of the deck
        return this.cards.shift()  
      }

    captureCard(card) {
        this.cards.push(card)
      }  

    getCards(){
      return this.cards;
    }
} //Closure for class Deck






// creating the Card class

class Card {
  constructor(suit, value, point) {
    this.suit = suit;
    this.value = value;
    this.point = point;   //builds in the mechanism to  
  }
  
//following code block is not required when using the custom suit images I created.
//used it on the first build before I started playing around with the "I wonder....." stuff.
  get color() {   //this method is not required with the custom images created above
    return this.suit === '♠'  || this.suit === '♣'? "black" : "red"
   }  //ternary operator (?, :) will return black if the suit is a club or a spade and red for the others

  playedCards() {
      document.getElementsByClassName(playedCards);
      playedCards.innerText = this.suit;
      playedCards.add("card");
      playedCards.dataset.value = `${this.value} ${this.suit}`;
      return playedCards;
    }

    getHTML() {
      const cardDiv = document.getElementById("div")
      cardDiv.innerText = this.suit
      cardDiv.classList.add("card", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
      return cardDiv
    }

}  // closure bracket for the class Deck
