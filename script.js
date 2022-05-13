'use strict';


//Setting numbers
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(number);
//react for 'check funciton
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //output the score in console for testing.
    console.log(score);
    
    //If score to 0
    if (score == 0){
        document.querySelector('.message').textContent = '😢You lost the game'
    }else{
        //if there is no input
        if (!guess) {
            document.querySelector('.message').textContent = '❓No input!'
        }else if(guess === number){
            //when guess the right number
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;
            document.querySelector('.message').textContent = '✅Correct! Congrats!' 

            if (highScore < score){
                //checking if the score is the highest.
                highScore = score;
                document.querySelector(`.highscore`).textContent = highScore;
            }
        }else if (guess > number){
            //when guess number lager than number.
            if (score == 1){
                //If score is one and still guess the wrong number
                score--;
                document.querySelector('.message').textContent = '😢You lost the game'
                document.querySelector('.score').textContent = score;
            }else{
                score--;
                document.querySelector('.message').textContent = '❌Number too high!'
                document.querySelector('.score').textContent = score;
            }     
        }else if(guess < number){
            //when guess number smaller than number.
            if (score == 1){
                //If score is one and still guess the wrong number
                score--;
                document.querySelector('.message').textContent = '😢You lost the game'
                document.querySelector('.score').textContent = score;
            }else{
                score--;
                document.querySelector('.message').textContent = '❌Number too low!'
                document.querySelector('.score').textContent = score;
            }
        }
    }
})


//react for 'again' function
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;  
    console.log(number);

    document.querySelector('.guess').value = '';
    document.querySelector(`.score`).textContent = '20'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...' 
})





//docment
//console.log(document.querySelector('.guess').value);