'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// object 만들기!
const obj1 = {}; // 'object literal' syntax 괄호를 이용해서 만들기
const obj2 = new Object(); // 'object constructor' syntax 클래스를 이용해서 만들기

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language) 나중에 키를 추가/수정할 수 있지만 권장하지 않음
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties 배열을 이용해서 값을 가져오는 computed property는 런타임에서 키가 결정될 때 사용함
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // key는 항상 string 타입
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue1(obj, key) {
    console.log(obj.key);
    console.log('hi');
}
printValue1(ellie, name); // undefined

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);

// 과거에는 이렇게 class를 만들었음
// 이렇게 순수하게 object를 생성하는 함수는 대문자로 시작
function makePerson(name, age) {
    return {
        name, // name: name,
        age,  // age: age,
    };
}
// makePerson 수정
// 아래와 같은 함수는 Constructor Function 이라고 함
function Person(name, age) {
    // 이렇게 constructor에서 사용했던 것처럼 사용할 수 있음
    // this = {}; 생략
    this.name = name; // this에 name과 age넣음
    this.age = age;
    // return this; 생략
}
const person5 = new Person('const func elile', 30);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // t
console.log('age' in ellie); // t
console.log('random' in ellie); // f
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj) 오브젝트의 경우
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
// 배열의 경우
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning 
// object 복사
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user); // 이렇게 복사한 상태에서 값을 바꾸면 user, user2 모두 바뀜

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// 이렇게 복사함! assign 이용 
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue, 뒤에 것으로 덮어 씌여짐
console.log(mixed.size); // big