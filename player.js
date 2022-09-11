

/*  I want to create a Player{} from this class that displays the player name and profile image
      √  1: create a class called Player
      √   2: create the constructor taking in name as param.
      √   3: create a method that matches the pic variable with the image file's location
      √ 4: build an array to hold player images  ----> pic = []
      √   5: build an array to hold player names   ----> name = []
        */


        let playerImage = [];  //creating the array and loading it with images
        playerImage[0] = new Image();
        playerImage[0].src = './images/mario.png';
        playerImage[1] = new Image();
        playerImage[1].src = './images/luigi.png'
        playerImage[2] = new Image();
        playerImage[2].src = './images/princess.png';
        playerImage[3] = new Image();
        playerImage[3].src = './images/carnivoran.png'
    
    
 class Player{
        constructor(name,description){
            this.name = name;
            this.description = description;
        }       
            
        displayImage(){  //there will be two players so I need an image and location for each
            let divLocation1 = document.getElementsByClassName('.imgDiv1'); //telling JS to find the html class 'imgDiv' and assign it to this variable
            let imgElement1 = document.createElement('img')  //using JS to manipulate the DOM by adding an HTML img element to the page
            let divLocation2 = document.getElementsByClassName('.imgDiv2');
            let imgElement2 = document.createElement('img');
                imgElement1= playerImage[0]; //pulls image[0] from Array & displays it on the screen
                imgElement2= playerImage[0];
                divLocation1.append(imgElement1); //telling JS to add the image to divLocation1
                divLocation2.append(imgElement2);
        }
        
             
       

        
        
    }
             
    const player1 = new Player('mario', 'Player 1');
    console.log(player1);

    const player2 = new Player('luigi', 'Player 2')
    console.log(player2)