'use strict';

console.log("Hello World");

// block scope
{
  let name = 'elly';
  console.log(name);
}
// console.log(name); // 아무것도 안나옴. 에러는 안남
// console.log(typeof(name)); // string

// global scope
let name = 'elly';
{
  console.log(name); // elly
}
console.log(name); // elly

// number
const count = 17;
const size = 17.1;
console.log(typeof(count)); // number
console.log(typeof(size)); // number

// 특별한 숫자 값
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// boolean
const test = 3 < 1; 
console.log(test)

// null
let nothing = null;
console.log(nothing) //null

// undefined
let x;
console.log(x);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false, symbol은 값이 같더라도 고유한 값을 생성함 
console.log(symbol1.description); // symbol의 값을 출력하려면 description을 사용

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true, 값이 같으면 같은 것으로 간주

// type script
let text = 1;
console.log(`${text}의 type은 ${typeof(text)}`);
text = '7' + 5; // let text = '7' + 5; 이렇게 쓰면 error! 위에서 선언했기 때문에!
console.log(`${text}의 type은 ${typeof(text)}`);
text = '8'/'2';
console.log(`${text}의 type은 ${typeof(text)}`);

// backtick(`)
const num = 1;
console.log(`변수에 들어 있는 숫자는 ${num}`);