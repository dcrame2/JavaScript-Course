'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    //switch to next player
  }
});
