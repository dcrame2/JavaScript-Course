'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//secret number needs to be outside the listener
const number = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (number === guess) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
