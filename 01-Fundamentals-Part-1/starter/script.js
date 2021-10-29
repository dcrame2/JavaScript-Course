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


/*
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/



// Template Literals using ${} and back ticks
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;

// const year = 2037;

// const jonas = "I'm  " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`just a regular string`);

// console.log(`String
// multiple
// lines`);



// Template Literals and if/else
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years ;)`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;

} else {
    century = 21;
}

console.log(century);
*/


// type conversion (we are manually changing the data type)

/*const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); // still a number but not a number LMFAO

console.log(String(23));


// typer coercion (js automatically changing the data type)
console.log('I am ' + 23 + " years old");
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');


let n = '1' + 1;
n = n - 1;
console.log(n); */


// 5 falsy values: 0, '', undefined, null, NaN

/*console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); //true


const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

// Equality Operators
/*
const age = 18;
if (age === 18) console.log("You just became an adult");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is great!');
} else if (favorite === 7) {
    console.log('7 is a cool #');
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log('Why not 23?');
*/


// Boolean Logic
// const hasDrivesLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDrivesLicense && hasGoodVision);
// console.log(hasDrivesLicense || hasGoodVision);
// console.log(!hasDrivesLicense);




// if (hasDrivesLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!')
// }

// const isTired = false; // C
// console.log(hasDrivesLicense && hasGoodVision && isTired);


// if (hasDrivesLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!')
// }



// coding challenge #3

// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinesThirdScore = 89;

// const koalasFirstScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;

// const minScore = 100;

// const dolphinsAvgScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinesThirdScore) / 3;
// console.log(dolphinsAvgScore);

// const koalasAvgScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;
// console.log(koalasAvgScore);

// if (dolphinsAvgScore > koalasAvgScore) {
//     console.log("Dolphins win!");
// } else if (dolphinsAvgScore < koalasAvgScore) {
//     console.log("Koalas win!");
// } else {
//     console.log("Its a draw!");
//}

// Bonus 1 & 2
/*const dolphinsFirstScore = 97;
const dolphinsSecondScore = 112;
const dolphinesThirdScore = 101;

const koalasFirstScore = 109;
const koalasSecondScore = 95;
const koalasThirdScore = 106;

const minScore = 100;

const dolphinsAvgScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinesThirdScore) / 3;
console.log(dolphinsAvgScore);

const koalasAvgScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;
console.log(koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore) {
    console.log("Dolphins win!");
} else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= minScore) {
    console.log("Koalas win!");
} else if (dolphinsAvgScore === koalasAvgScore && koalasAvgScore >= minScore && dolphinsAvgScore >= minScore) {
    console.log("Both teams win!");
} else {
    console.log("no one wins bitches hahahahahah!");
} */

// switch statements

// const day = 'tuesday';

// switch (day) {
//     case 'monday': //day === monday
//         console.log('Plan course structure');
//         console.log('Go to coding meeting');
//         break;
//     case 'tuesday':
//         console.log("prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend!')
//         break;
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meeting');
// } else if (day === 'tuesday') {
//     console.log("prepare theory videos");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend!')
// } else {
//     'Not a valid day'
// }


// // Conditional Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!')

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }

// console.log(drink2)

const tip = .15;
const tip1 = .20;
const bill = 430;

const tipAmount = bill > 50 && bill < 300 ? `The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill + (bill * tip)}` : `The bill was ${bill}, the tip was ${bill * tip1}, and the total value ${bill + (bill * tip1)}`;
console.log(tipAmount);