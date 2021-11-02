'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");*/

// const interface = 'Audio';
// const private = 534;

/*
function logger() {
    console.log("my name is jonas");
}


// calling / running / invoking the function
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


//Function declaration
/*
function calcaAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const age1 = calcaAge1(1996);
console.log(age1);
*/


//function expression
/*
const calcAge2 = function (birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const age2 = calcAge2(1996);
console.log(age2);
*/


//Arrow function 
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearUntiltRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntiltRetirement(1991, "Dylan"));
*/




//Using Multiple functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/



//Using an if/else in your function
/*
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}


const yearUntiltRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }


    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntiltRetirement(1996, 'Dylan'));
console.log(yearUntiltRetirement(1917, 'Mike'));
*/


//Coding Challenge #3


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


//Test 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// Test 2 
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);



function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return "Nobody wins!"
    }
}

const winner = checkWinner(scoreDolphins, scoreKoalas);
console.log(winner);

