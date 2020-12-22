'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending(처리중) -> fulfilled(완료) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically!!!! 
// 따라서 사용자가 버튼을 눌렀을 때 네트워크 통신을 해야한다면 적절하지 않음
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
    console.log('doing something...');
  
    setTimeout(() => {
        resolve('ellie'); // resolve라는 콜백함수에 ellie 전달 
        // reject(new Error('no network')); // Error는 자바스크립트에서 제공하는 클래스로 Error 오브젝트에는 에러 이유를 작성함
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise 
    .then(value => console.log(value)) // pormise가 잘 수행되었을 때 실행됨. promise가 리턴됨. value에는 resolve에서 넘긴 ellie가 들어감
    .catch(error => {
        console.log(error); // error는 에러 이유를 받아옴 Error: no network
    })
    .finally(() => {
        console.log('finally');
    }) // 성공, 실패와 상관없이 항상 실행

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚)`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // .then(hen => getEgg(hen)) 과 동일
  .catch(error => {
      return 'bread';
  })
  .then(cook)
  .then(console.log) // .then(meal => console.log(meal))
  .catch(console.log); // error handling
