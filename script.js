'use strict';
/*
document.querySelector('.mesage').textContent = '✅ Correct Number!'; //changing text by its class

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


//for inputs we use value instead of text 

document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    //when there is no input

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number';

        //when player wins
    } else if (guess === secretNumber) {

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '✅ Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //when guess is higher
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈  Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost 🤡';
            document.querySelector('.score').textContent = 0;
        }

        //when guess is lower
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📉  Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost 🤡';
            document.querySelector('.score').textContent = 0;
        }
    }

})