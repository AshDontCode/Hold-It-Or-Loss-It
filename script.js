'use strict';




//Selection Neccessary Elements


const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");


score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hide");
var currentScore = 0;

var activePlayer = 0;

const scores = [0, 0];

let playing = true;


//Switch Player

function switchPlayer()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        
    activePlayer = activePlayer === 0 ? 1:0;
    currentScore = 0; 

    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");

}



//Restart the game

btnNew.addEventListener("click", function()
{
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add("hide");
    currentScore = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player1.classList.remove("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");

    

})






// Rolling dice functionallity

btnRoll.addEventListener("click", function()
{

    if(playing){

    //Generate the random number
    var randomNumber = Math.floor(Math.random()*6)+1;

    //display Dice
    dice.classList.remove("hide");
    dice.setAttribute("src", `dice-${randomNumber}.png`);

    
    // checking 
    if(randomNumber != 1)
    {
        //Add dice to current score
        currentScore = currentScore + randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        //Switch to next player
       switchPlayer();


    }
    }
});


btnHold.addEventListener("click", function(){
    //Add current score to active player score
    if(playing){

    scores[activePlayer] +=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //Check if palyer's score is >= 100
    if(scores[activePlayer] >= 100)
    {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        dice.classList.add("hide");



    }

    else
    //switch the player
    switchPlayer();

   
    }

})
