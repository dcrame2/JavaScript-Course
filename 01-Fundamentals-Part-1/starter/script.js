// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
/*
true;  //automatically a boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Dynamic Typing

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Johnny';

console.log(firstName + " " + lastName);


//Assignment operators
let x = 10 + 5;
x += 10 //x = x + 10 = 25
x *= 4; // x = x *4
console.log(x);


const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);
*/

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);