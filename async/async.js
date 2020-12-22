// async & await
// clear style of using promise :)

// 1. async
function syncFetchUser() {
    // 10초 걸린다고 가정
    return 'ellie';
}
const syncUser = syncFetchUser();
console.log(syncUser); // 오래 걸림

// 방법 1) promise
function promiseFetchUser() {
    return new Promise((resolve, reject) => {
        resolve('ellie');
    })
}
const promiseUser = promiseFetchUser();
promiseUser.then(console.log)

// 방법 2) async (promise를 쓰지 않아도 promise로 리턴해줌)
async function fetchUser() {
    return 'ellie';
}  
const user = fetchUser();
user.then(console.log);
console.log(user); // promise 리턴
  
// 2. await ✨
// async 내부에서만 사용가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); // 2초 후에 resolve 호출, await은 delay(2000)이 완료되기까지 기다려줌
    return '🍎'; // 따라서 delay가 완료되면 사과를 리턴하는 promise가 만들어짐
}

async function getBanana() {
    await delay(1000); // 1초 후에 바나나가 리턴되는 pormise
    // throw 'error'; // 에러를 발생시킴
    return '🍌';
}

// bad
async function pickFruits() {
    try {
        const applePromise = getApple(); // promise는 만들자마자 실행됨
        const bananaPromise = getBanana();
        const apple = await getApple(); // 여기서 동기화
        const banana = await getBanana();
        return `${apple}, ${banana}`    
    } catch {
    }
}
pickFruits().then(console.log);
  
// 3. useful APIs ✨ good!
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);
 
// promise 중 먼저 나오는거만 전달하고 싶을때! 사용
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);