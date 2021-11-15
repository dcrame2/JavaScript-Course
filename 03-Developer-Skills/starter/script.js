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

const temperatures = [3, -2, , -10, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures1 = [3, -2, -6, -1, 'error', 9, 56, 17, 15, 300, 9, 5];

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
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsuis',

    // C) fix the bug
    value: Number(prompt('Debgrees celsuis:')),
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
