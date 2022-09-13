import Deck from "./deck.js";

let expect = chai.expect;

describe('MyFunctions', function(){
    describe('#deck.shuffle()', function(){
        it ('shuffle the deck of cards', function(){
            let x = Deck.shuffle();
            // let y = Deck;
            

            expect(x.length).to.equal(26);
        })
    })
})