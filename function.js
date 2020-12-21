'use strict';

// Function
// - 절차 지향적 언어는 function(subprogram)이 중요
// - function is object in JS
// - object로 취급 되기 때문에 함수 파라미터, 리턴, 변수 할당, '.blah'이 가능함

// 1. Function declaration
// 함수는 선언과 동시에 hoisting 되기 때문에 함수 선언 전에 호출이 가능함
// function name(param1, param2) { body... return; }
// one function === one thing (가장 작은 단위로 작성)
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
    return 0;
};
log('Hello@');
log(1234);

// type script
// function log(message: string): number {
//     console.log(message);
//     return 0;
// };  
  

// 2. Parameters 중요!!!
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
  
// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage(); // 함수 파라미터를 안주면 기본값으로 undefined가 출력됨
showMessage('Hi!'); // Hi! by unknown
showMessage('Hi', 'yuri'); // Hi by yuri
  
// 4. Rest parameters (added in ES6)
// ...args 는 배열 형태로 전달하는 것을 의미함
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 안에서는 밖의 값을 볼 수 있지만 밖에서는 안의 값 볼 수 없음
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error : Uncaught ReferenceError: childMessage is not defined 
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
  
// 리턴하지 않으면 undefined를 리턴한 것과 같음
function noneReturn() {
};
const test = noneReturn();
console.log(test);

// 함수는 빨리 리턴하고 빠져나가는 것이 좋은 코드
// bad
function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
}
  
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// 함수를 선언과 동시에 변수에 할당함
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain(); // print 함수 호출
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // printYes, printNo callback 함수
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
}; 
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print();
    // call stack이 꽉찼다고 출력됨
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
  
// Arrow function
// function 명령어 생략가능. anonymous function이면 이름도 생략 가능. ()만 남고 {}는 한줄이면 생략 가능함
// const simplePrint = function () {
//   console.log('simplePrint!');
// };  
// const expression변수명 = (파라미터) => 리턴
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b; 
const simpleMultiply = (a, b) => {
    // log code
    return a * b;
};
  
// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 호출하기(함수를 괄호로 감싼 후, 마지막에 함수 호출할때처럼 ()써주면 됨)
(function hello() {
    console.log('IIFE');
})();

  
// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));