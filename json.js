// json
// - JavaScript Object Notation (자바스크립트의 object에서 영감을 받아서 탄생함)
// - 키와 value로 구성
// - 서버 간 데이터 전송시 가장 간단하게 주고 받을 수 있는 file format
// - 텍스트 기반의 간단한 format
// - 가독성 좋음
// - 서버간 데이터 전송시 serialize(직렬화)를 위해서 사용함
// - 프로그래밍 언어와 플랫폼과 상관없이 사용할 수 있음
// - 과거에는 xml 에서 많이 씀

'use strict';

// JSON

// serialize
// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true
json = JSON.stringify(['apple', 'banana']);
console.log(json); // 직렬화 하면 ""로 바뀜

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2020-12-22T08:42:38.830Z"}
// 함수, symbol 포함 안됨

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // 해당 속성만 json 으로 변환
// {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);
// {"name":"ellie","color":"white","size":null,"birthDate":"2020-12-22T08:45:14.460Z"}

// deserialize
// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

// birthdate를 그냥 쓰면 string이기 때문에 에러 발생 
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 
