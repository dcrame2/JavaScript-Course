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


//const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


//Test 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// Test 2 
/*
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
*/


// Data Structures: ARRAYS
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//other way to write Arrays but above is better
const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

//.length
console.log(friends.length);
console.log(friends[friends.length - 1]);

//mutate
friends[2] = 'Jay';
console.log(friends);


const jonas = ['Jonas', 'Schmed', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);
*/


// ARRAY OPERATORS: METHODS
/*
const friends = ['Michael', 'Steven', 'Peter'];


// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop(); //Last
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
*/


//Coding Challenge #2
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }

}

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);
*/







// Objects
/*const dylan = {
    firstName: 'Dylan',
    lastName: 'Cramer',
    age: 2021 - 1996,
    job: 'Web Developer',
    friends: ['Michael', 'Dustin', 'Colton']
}

// Dot notation
console.log(dylan.lastName);
//bracket notation
console.log(dylan['lastName']);

const nameKey = 'Name';
console.log(dylan['first' + nameKey]);
console.log(dylan['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about Dylan? Choose between firstName, lastName, age, job, and friends");

// if (dylan[interestedIn]) {
//     console.log(dylan[interestedIn]);
// } else {
//     console.log('Wrong Request!');
// }


dylan.location = 'Chicago';
dylan['twitter'] = '@itsyoungdyl';
console.log(dylan);

//challenge
console.log(`${dylan.firstName} has ${dylan.friends.length} friends, and his best friend is called ${dylan.friends[0]}`);
*/




/*const dylan = {
    firstName: 'Dylan',
    lastName: 'Cramer',
    birthYear: 1996,
    job: 'Web Developer',
    friends: ['Michael', 'Dustin', 'Colton'],
    hasDriversLicense: true,

    // When writing functions inside of an object you need to write it as a function expression.
    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }


    // Using the 'this' keyword
    // calcAge: function () {
    //     // console.log(this);
    //     return 2021 - this.birthYear;
    // }


    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },



    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's lincense`;

    }
};



console.log(dylan.getSummary());
*/
// console.log(dylan.age);
// console.log(dylan.age);
// console.log(dylan.age);

// Challenge
// 'Dylan is a 25-year old Web Developer, and he has a driver's license"



// Coding Challenge #3


/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}


function winner() {
    if (mark.calcBMI() > john.calcBMI()) {
        return `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})'`;
    } else if (mark.calcBMI() < john.calcBMI()) {
        return `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})'`;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);
console.log(winner());
*/



// Loops: for()
/*
for (let rep = 1; rep <= 10; rep++) { // for loop keeps running while condition is TRUE
    console.log(`Lifting weights repetition ${rep}`);
}
*/




// Looping through Arrays

const jonas = [
    'Jonas',
    'Schmed',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

const types = [];

// logging all items to the console
for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    // other way to do the above but cleaner
    types.push(typeof jonas[i]);
}

console.log(types);