'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  //creates new scope
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'new output';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); will not work with strict mode
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Dylan';
calcAge(1991);
