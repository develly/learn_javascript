'use struct';

// javascript is synchrnous 동기적
// hoisting 이후 순차적으로 실행됨
console.log(1);
console.log(2);
console.log(3); // 1,2,3

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3); // 1,3,2
// settimeout을 만나면 브라우저에 1초 뒤에 알려달라고 요청함
// 1초뒤에 브라우저가 콜백함수 실행하라고 요청함
// 콜백함수 실행됨



// synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// asynchronous callback
function printWaitDelay(print, delay) {
    setTimeout(print, delay);
}
printWaitDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    // 메소드1(api1)
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('no access'));
            }
        }, 2000);
    }
    // 사용자의 정보를 받아오는 api(원래는 로그인과 동시에 받아와야함)
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }    
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passward = prompt('enter your passward');
userStorage.loginUser(
    id, 
    passward, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);