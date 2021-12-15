'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  //creates new scope
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Dylan';
calcAge(1996);
