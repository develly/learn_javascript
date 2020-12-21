# LECTURE 2 NOTE

## 1. 변수 선언 방법  
#### (1) let, 포인터 수정 가능 (ES6에서 추가)

```
let a = 'elly';
console.log(a);
a = 'hello';
console.log(a);
```   

1. a에는 elly를 가르키는 포인터가 저장되고 메모리에 elly가 올라감  
2. a에 hello를 대입하면 새 메모리에 hello가 올라가고 a는 hello가 있는 곳을 가르키게 됨  
3. (참고) string은 immutable data type으로 값 수정 불가

#### (2) const, 포인터 수정 불가 (사용 권장)

```
const b = 'ellie';
console.log(b);
b = 'hi'; // 에러! Uncaught TypeError: Assignment to constant variable.
```  
1. const는 포인터 수정 불가능  
2. 따라서 현재 ellie를 가르키고 있는 b를 hi를 가르키도록 수정할 수 없음(에러 원인)

#### (3) var hoisting
* 과거에는 var을 이용해서 변수를 선언했음  
* var을 이용하여 변수를 선언하면 hoisting이라는 것이 발생함  
* hoisting이란 변수를 어디에 선언하든 가장 위로 끌어올리는 것을 말한다  
* 따라서 var를 사용하면 {} block scope가 작동하지 않고 변수 관리가 어려워진다는 단점이 있음

## 2. Data type
#### (1) immutable, 값 수정 불가 (사용 권장: 보안, Thread safety)
* Primitive type data (String, Number, Boolean, Null, Undefined, Symbol)
* Freezen object
* 같은 값에 대한 메모리 할당
```
let a = 1;
let b = 1; 
// 1 값을 메모리에 쓰고 a는 1 가르킴 
// 1 메모리에 쓰려고 했는데 이미 1 값이 메모리에 있음 
// 따라서 새로 쓰지 않고 b라는 포인터만 설정함
// a와 b는 같음 (a === b true)
```

* 변수의 가변성
```
let a = 1;
let b = 1; 
let c = a;
let c = 2;
// a는 여전히 1 이고 c가 2를 가르킴
```

#### (2) mutable, 값 수정 가능
* Object
* 배열
* function
* 같은 값에 대한 메모리 할당
```
let a = {name : 'elly'};
let b = {name : 'elly'}; 
// 메모리에 {name : 'elly'}를 쓰고 a에 포인터를 저장   
// 새 메모리에 {name : 'elly'}를 또 씀!  
// 이미 같은 값을 가지고 있지만 mutable 데이터는 메모리에 계속 새로 쓴다는 특징이 있음
// a와 b는 같지 않음 (a === b false)
```

* 변수의 가변성(가변함, mutable)
```
let a = {name : 'elly'};
let b = {name : 'elly'}; 
let c = a;
c.name = 'yuri';
// a와 c 모두가 name이 yuri로 변경
```

```
const a = { name: 'yuri', age: 20 };
const b = { name: 'yuri', age: 20 };
const c = a;
console.log(a === b); // flase
console.log(c === a); // true
c.age = 30;
// a 와 c 모두가 age가 30으로 변경
// const로 선언했기 때문에 포인터 수정 불가(따라서 a에 다른 값을 할당할 수 없음)
// 하지만 name과 age의 포인터는 수정 가능 (matable한 자료형으로 c 바꾸면 a도 바뀜)
```

* object의 복사
```

```
* Object안에 배열이 들어간 경우 복사
```
const a = {name: 'elly', score: [50, 60, 100]};
```

#### (3) const, let, mutable, immutable 정리
* 기본적으로 const 사용
* 만약 값을 변경할 예정이면 let을 사용
* object의 경우 const를 사용해도 값 변경 가능 
* 기존에 선언된 object를 다른 변수에 할당 할 때 주의하기
* object의 경우 가변하기 때문에 할당한 값을 바꾸면 기존 값도 바뀜
* 따라서 할당 할 때 python의 deep copy같은 방법이 필요함

## 3. scope
#### (1) block scope
```
{
  let name = 'elly';
  console.log(name); // elly
}

console.log(name); // 아무것도 안나옴. 에러는 안남(웹에서 window.name 을 제공하기 때문) node로 돌리면 에러남.
console.log(typeof(name)); // string
```
블록 안의 값은 블록 밖에서 접근 불가(볼 수 없음)

#### (2) global scope
```
let name = 'elly';
{
  console.log(name); // elly
}
console.log(name); // elly
```
블록 안/밖과 상관없이 어디서든 값 확인 가능  
하지만 global로 선언된 변수는 프로그램이 끝날 때까지 메모리 상에 위치하므로 최소로 쓰는 것이 좋음

## 4. Variables
#### (1) number
자바스크립트에서는 소수, 정수와 상관없이 숫자는 모두 number라는 타입으로 다룸
```
const count = 17;
const size = 17.1;
const num1 = 1234567890n // 숫자 끝에 n을 붙이면 bigint가 됨
console.log(typeof(count)); // number
console.log(typeof(size)); // number

// 특별한 숫자 값
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN
```

#### (2) string
```
const char = 'hi';
```

#### (3) boolean
```
const canRead = true;
const test = 3 < 1; // false
```

#### (4) null
빈 empty 값(값이 할당 된 상태임)
```
const nothing = null;
console.log(nothing) //null
```

#### (5) undifined
값이 할당되지 않음
```
let x;
console.log(x);
```

#### (6) symbol
고유한 id 값을 전달하고 싶을 때 사용함
```
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false, symbol은 값이 같더라도 고유한 값을 생성함 
console.log(symbol1.description); // symbol의 값을 출력하려면 description을 사용

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true, 값이 같으면 같은 것으로 간주
```

#### (7) object
```
const elly = { name: 'yuri', age: 20 };
```
* 객체는 메모리에 값이 아니라 reference 가 올라감
* elly가 가르키는 곳에는 name과 age의 reference 가 담겨있음
   

## 5. Type script(TS)
* JavaScript는 Dynamically Typed Language임 (C, Java는 Statically Typed Language)  
* 다이나믹 프로그래밍 언어란 Runtime에서 Type이 결정됨 (자료형을 선언하지 않고 실행하면서 할당된 값에 대해 자료형을 결정하는 언어)

```
// (장점) 프로토타입을 빠르게 개발  
// (단점) 큰 프로젝트에서 문제 발생시 수정하기 어려움

let text = 1;
console.log(`${text}의 type은 ${typeof(text)}`); // number
// let text = '7' + 5; 이렇게 쓰면 error! 위에서 선언했기 때문에!
text = '7' + 5; 
console.log(`${text}의 type은 ${typeof(text)}`); // string
text = '8'/'2';
console.log(`${text}의 type은 ${typeof(text)}`); // number
```

* Dynamically Typed Language의 단점을 보완하기 위해 TS 탄생
* 기존의 JavaScript 언어에 Type이 올려진 언어임
```
let a = 12;
let a; number = 12;
```

## 6. backtick(`)
```
const num = 1;
console.log(`변수에 들어 있는 숫자는 ${num}`);
```

## 7. etc.
```
let a = 'hello';
console.log(a.charAt(0)); // h
```