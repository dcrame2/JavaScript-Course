// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));
*/

// Problem
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error. "

// const temperatures = [3, -2, , -10, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures1 = [3, -2, -6, -1, 'error', 9, 56, 17, 15, 300, 9, 5];

// 1. Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperautres?
// - Whats a sensor error? And what to do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min and max (amplitude) and return it

/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    // if (typeof curTemp !== 'number') continue;`
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

*/
// PROBLEM 2
// Function shoud now receive 2 arrays of temps

//1. Understanding the problem
// = With 2 arrays, should we implements functionality twice? NO! just merge two arrays together

// 2. Breaking up into sub-problems
// - Merge two arrays?

/*const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    // if (typeof curTemp !== 'number') continue;`
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures1);
console.log(amplitudeNew);
*/

// DEBUGGING
/*const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsuis',

    // C) fix the bug
    // value: Number(prompt('Debgrees celsuis:')),
    value: 10,
  };
  // B) FIND the bug
  console.table(measurement);

  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    // if (typeof curTemp !== 'number') continue;`
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, temperatures1);
console.log(amplitudeBug);
*/

///////////////////////////////////
// Coding Challenge #1
/*
Given an array of forecasted maximum temperautre, the thermometer displays a string with these temperature.

Example: [17, 21, 23] will print "... 17 C in 1 days... 21 C in 2 days ... 23 C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index + 1

//2) Breaking up into subproblems
// - Transform Array to string
// - Transaction each element to string C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const temperatures = [17, 21, 23];
const temperatures1 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer = answer + `... ${arr[i]} C in ${i + 1} days`;
  }

  return answer;
}

console.log(printForecast(temperatures));
