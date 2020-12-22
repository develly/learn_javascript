'use strict';
// class: template (ES6)
// object: instance of a class

// 1. Class 선언
class Person {
    // constructor 
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
  // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// Object 만들기 (new)
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 말이 안되는 파라미터 설정시 변수 보정하기 위해서 사용함
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // get 함수 정의시 this.age 대신 get 호출
        // set 정의시 age 대신 set 호출
    }

    // 사용자가 값 호출시 아래의 값을 리턴함
    get age() {
        return this._age; 
    }

    // 사용자가 값 설정시 set 함수가 호출되고 this._age를 value 로 설정함
    // this.age = value 라고 하면 set이 반복적으로 호출되어서 call stack이 꽉참
    set age(value) { 
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // _age도 age로 사용 가능
console.log(user1);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // 밖에서 접근 불가 undefined

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding'; // object와 상관없이 class 자체에 변수와 메소드 할당
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // class 를 이용해서 사용함!
Article.printPublisher();

// 5. Inheritance 상속과 오버라이딩
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {    
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 상속
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

// 오버라이딩
class Triangle extends Shape {
    draw() {
        super.draw(); // 오버라이딩을 하면 기본적으로 부모의 것은 가져오지 않음. 하지만 super를 사용하면 부모의 메소드 호출함
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t? 상속하면 t!
console.log(triangle instanceof Object); //t 자바스크립트의 모든 오브젝트는 오브젝트를 상속함
console.log(triangle.toString()); 
