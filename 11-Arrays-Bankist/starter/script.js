'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type     movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.innerText = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);

  labelSumIn.innerText = `${income}€`;

  const out = movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumOut.innerText = `${Math.abs(out)}€`;

  const interest = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return (deposit * 1.2) / 100;
    })
    .filter(function (int, i, arr) {
      console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);

  labelSumInterest.innerText = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createUsernames(accounts);

// Event Handler
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('LOGIN');
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE (MUTATES THE ARRAY)
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE (MUTATES THE ARRAY)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

/*
// AT
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); //using at is the same as the above example

// gtting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Dylan'.at(0));
*/

/*
console.log('---- FOROF ----');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// You can't break out of a foreach loop - it will always loop over the whole array.
*/

/*
// FOR EACH FOR MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// FOR EACH FOR SETS
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
// Sets dont have keys - it makes no sense to have it for sets.
*/

/*
//////////////////////////////////////////////////////
// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
//   1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
//   2. Create an array with both Julia's (corrected) and Kate's data
//   3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶 ")
//   4. Run the function for both test datasets

// Test data:
//   Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//   Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Hints: Use tools from all lectures in this section so far

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCopy = dogsJulia.slice(1, 3);
  const allDogs = juliaCopy.concat(dogsKate);

  allDogs.forEach(function (dogs, i) {
    const age = dogs > 3 ? 'an adult' : 'still a puppy';

    console.log(`Dog number ${i + 1} is ${age}, and is ${dogs} years old`);
  });
};

checkDogs(dogsJulia, dogsKate);
*/

// MAP Method
/*
const eurToUsd = 1.1;

//MAP Method returns a new array and that is why we  put it into a variable
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSD1 = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD1);

// writing the same function with forOf
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You  ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`

  // same function as above
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescriptions);*/

/*
// FILTER METHOD
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// Example using a for of on the same example above for filter method
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// Pulling the withdrawals from the movements array only
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
*/

/*
// REDUCE METHOD
console.log(movements);

// accumalator is like a snowball where it keeps growing
const balance = movements.reduce(function (accumalator, cur, i, arr) {
  console.log(`Iteration ${i}: ${accumalator}`);
  return accumalator + cur;
}, 0);
console.log(balance);

// Example using a for of on the same example above for reduce method
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximun value using Reduce method : acc will keep track of the max number
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]); // always go with first value of the array
console.log(max);
*/

///////////////////////////
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.

// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages)
// 4. Run the function for both test datasets

// Test data:
//   Data 1: [5, 2, 4, 1, 15, 8, 3]
//   Data 2: [16, 6, 10, 5, 6, 1, 4]

/*
const calcAverageHumanAge = function (dogArr) {
  const humanAge = dogArr.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else if (dogAge > 2) {
      return 16 + dogAge * 4;
    }
  });
  const adults = humanAge.filter(dogAge => dogAge > 18);
  console.log(adults);

  const average =
    adults.reduce(function (acc, dogAge) {
      return acc + dogAge;
    }, 0) / adults.length;

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
/*
// Chaining all of the above methods together
//Pipeline the data we are getting
const eurToUsd = 1.1;
const totalDepositsInUSD = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * eurToUsd;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

console.log(totalDepositsInUSD);
*/

///////////////////////////////////
// Coding Challenege #3

/*
Rewire the 'calcAverageHumanAge' function from the previous chellenege, but this time as an arrow function, and using chaining

Test data:
  Data 1: [5, 2, 4, 1, 15, 8, 3]
  Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  const humanAge = arr
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge > 18)
    .reduce(function (acc, dogAge, i, arr) {
      return acc + dogAge / arr.length;
    }, 0);

  return humanAge;
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
*/

/*

//FIND Method
// Will find the first element in the array
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Find method but FOR Of
const accountFor = function () {
  // const newArray = [];
  for (const acc of accounts) {
    if (acc.owner === 'Jessica Davis') {
      console.log(acc);
    }
  }
};
accountFor();
*/
