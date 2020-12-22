'use strict';

// Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// Increment and decrement operators
let counter = 2;
preIncrement = console.log(++counter); // 3 처음에 더함 
postDecrement = console.log(counter--); // 3 나중에 뺌
console.log(counter); // 2

// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// Comparison operators : Boolean
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`); // || (or), 처음으로 ture가 나오면 끝
console.log(`and: ${value1 && value2 && check()}`); // && (and), 처음으로 false가 나오면 끝
// 따라서 함수 같은건 가장 뒤에 배치!


// Equality(값이 같은지 확인)
const stringFive = '5';
const numberFive = 5;
// (1) == loose equality, Type을 고려하지 않음
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// (2) === strict equality, Type을 고려함(no type conversion), 권장!
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // ture
// (3) Quiz! 
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false, ref 다름
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // ture
console.log(null === undefined); // false


// Conditional operators: if
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkown');
}
// Ternary operator: ? // 조건문이 간단하다면 다음과 같이 쓸 수 있음
console.log(name === 'ellie' ? 'yes' : 'no');

// Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// Loops
// (1) while
console.clear();
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); 
  i--;
}
console.log(i); // 0 

// (2) do while loop
i = 3;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i>0);
console.log(i); // 0 

// (3) for loop
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
console.log(i); // 0 

for (let i = 3; i > 1; i = i - 1) {
  // inline variable declaration
  // 이렇게 안에서 선언한 변수는 밖에 변수에 영향을 미치지 않음!!!
  console.log(`inline variable for: ${i}`);
}
console.log(i); // 0 

// simple
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }

    // 배열의 경우 of를 통해 값을 받아올 수 있음
    // 예시)
    // const array = [1, 2, 4, 5];
    // for (let value of array) {
    // console.log(value);
    // }

    for (const arg of args) {
      console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// 오브젝트의 경우 key는 in 을 통해 받아올 수 있음
console.clear();
const ellie = { name: 'ellie', age: 4 };
for (let key in ellie) {
  console.log(key);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// // Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i>8) {
        break;
    }
    console.log(i);
}