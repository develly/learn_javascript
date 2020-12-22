'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 원소
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// 예시
// fruits.forEach(function (value, index, array) {
//     console.log(value, index, array);
//     // forEach는 callback 함수를 배열을 각 요소마다 처리할 수 있음
//     // callback 함수의 파라미터로는 값, 인덱스, 배열을 받아올 수 있음
// })
// forEach를 arrow function으로 표현
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// 매우 느림!
// unshift: add an item to the benigging
// 앞에서 데이터 넣기
fruits.unshift('🍓', '🍋');
console.log(fruits);
// shift: remove an item from the benigging
// 앞에서부터 데이터 빼기
fruits.shift(); // 가장 앞에꺼 하나 뺌
fruits.shift(); 
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position 지정된 포지션에서 지우기
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
// fruits.splice(1); // 1부터 지움! 몇개 지울건지 지정 안하면 인덱스 0만남음 (1부터 다 지움)
fruits.splice(1, 1); // 인덱스 1만 지움
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); // 뒤에 더 붙이면 지워진 자리에 추가하여 결과 출력됨
console.log(fruits);

// combine two arrays // 배열 합치기!
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 첫번째 사과의 인덱스 출력
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 없는 값을 넣으면 -1 출력

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥')); // 마지막 코코넛 인덱스 출력




// ------------------------- Quiz! -------------------------
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // const result = fruits[0] + fruits[1] + fruits[2]
    const result = fruits.join('');
    console.log(result);
}
  
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result1 = fruits.split(','); 
    const result2 = fruits.split(',', 2);  
    console.log(result1);
    console.log(result2); // ["🍎", " 🥝"]
}
  
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 원래 array도 변형시킴    
}
  
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const arr1 = array.slice(2, 5); // splice는 배열 자체를 수정, slice 는 새로운 배열 생성
    console.log(arr1); // [3, 4, 5]
    console.log(array); 
}
  
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
  
// Q5. find a student with the score 90
{
    // const result = students.find(function (student) {
    //     return student.score === 90;
    // })
    // console.log(result)

    const result = students.find( (student) => student.score === 90);
    console.log(result) // find는 찾으면 찾은 값 리턴하고 종료함
    // {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
    // const result = students.filter((student) => student.enrolled === true);
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    //  {name: "A", age: 29, enrolled: true, score: 45}
    //  {name: "C", age: 30, enrolled: true, score: 90}
    //  {name: "E", age: 18, enrolled: true, score: 88}
}

// Q7. make an array containing only the students' scores
{
    const result = students.map((student) => student.score);
    console.log(result);
    // result should be: [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50) ; // 점수 50보다 작은 사람 있으면 true 리턴
    console.log(result); // true

    const result2 = !students.every((student) => student.score >= 50); // 전부 맞으면 true
    console.log(result2) // true
}

// Q9. compute students' average score
{
    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr); // prev a , curr b
    //     return curr // return 을 주지 않으면 prev 값이 두번째부터 안나옴 (리턴하는 값이 다음 prev로 설정됨)
    //                 // 지금은 리턴을 curr 해주었기 때문에 a,b / b,c / c,d 이렇게 잘 나옴
    // })

    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr);
    //     return curr
    // }, 0) // 0부터 시작 

    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr);
    //     return prev + curr.score
    // }, 0)

    console.clear();
    // reduce 누적된 값을 전달
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // const result = students.map((student) => student.score);
    // const result2 = result.join();

    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result)
}