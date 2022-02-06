'use strict';

/*
// Function Example
const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199) {
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800);
*/

// How passing arugments works: references vs primitives - applied to functions
// being aware of this issue
const flight = 'LH234';
const jonas = {
  name: 'Dylan Cramer',
  passport: 234542365,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234542365) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightName = flight;
// const passanger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
