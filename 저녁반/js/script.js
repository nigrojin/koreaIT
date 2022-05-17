// console.log('hello world');

// hello world

// hello world

// hello world
// // hello world
// hello world

// 줄바꿈해도 주석 처리가 됨
/* 
hello world
hello world
hello world
*/

// DATA type (데이터 타입)

// String (문자), '', ""
// var variable (변수)
// var name = '제네시스'
// var space = '' // 빈문자

// console.log(name)
// console.log(space)

// Number (숫자)
// var year = 2022

// Boolean (참, 거짓): true or false
// var bool = true // 참
// var bool = false // 거짓

// undefined 
// var car;
// console.log(car)

// null (없음)
// var car = null;
// console.log(car)


// // String (문자)
// var name = '제네시스'
// // Number (숫자)
// var year = 2022
// // Boolean (참, 거짓)
// var onSale = true
// // undefined (정의되지 않음)
// var owner;
// // null (없음)
// var color = null; // 의도적으로 null(없음)이라고 지정함

// Operator (연산자)
// Arithmetic Operator (수리 연산자)
// Assignment Operator (할당 연산자)
// Comparison Operator (비교 연산자)
// Logical Operator (논리 연산자)

// Arithmetic 수리연산자
// +, -, *, / 
// ++(Increment 증가), --(decrement 감소)

// console.log(1 + 3 * 4)
// console.log((1 + 3) * 4)

// + (더하기)는 String에서도 사용 가능
// var car = '현대' + '자동차'

// var car = '현대' + ' 제네시스';
// var car = '현대' + ' ' + '제네시스';

// console.log(car)

// var year = '2022'
// console.log(typeof year)

// var x = 20
// var y = '22'

// console.log(x + y);
// // 숫자와 문자를 더하면 문자가 된다
// console.log(typeof (x + y));

// var num = 0;

// // console.log(num++) // error

// num++ // num = num + 1
// console.log(num) // ok


// Assignment (할당 연산자)
// =, +=, -=, *=, /=

// var name = '제네시스'

// var num = 2021

// num ++
// num = num + 1
// num += 1;

// var num = 2023

// // num--
// // num = num - 1
// num -= 1;

// console.log(num);

// Comparison (비교 연산자)
// ==, ===, !=, !==
// >, <, >=, <=

// == value(값)이 같다
// var result = '20' == 20 // true

// === value(값)와 type(타입)이 모두 같다
// var result = '20' === 20 // 더 엄격하다

// != value (값)이 다르다
// var result = '20' != 20

// !== value(값) 또는 type(타입)이 다르다
// var result = '20' !== 20 // 더 엄격하다

// var result = 20 > 22
// console.log(result) 

// Logical (논리연산자)
// &&, ||, !

// && and (그리고)
// var result = 22 > 0 && 22 > 20

// || or (또는)
// var result = 22 > 0 || 22 < 20

// ! not(부정)
// var result = 22 > 20

// var result = !(22 > 20)
// console.log(result)

// Condition (조건문)
// if, if/else, if/elseif/else

// var age = 20

// // if (true or false)
// if (age > 18) {
//     console.log('성인')
// }

// var age = 14

// if (age > 18) {
//     console.log('성인')
// } else {
//     console.log('청소년 또는 어린이')
// }

// var age = 8

// if (age > 18) { // if (true or false)
//     console.log('성인')
// } else if (age > 14) { // else if (true or false)
//     console.log('청소년')
// } else if (age > 7) {
//     console.log('어린이')
// } else {
//     console.log('유아')
// }

// var age = 20

// if (age >= 18) {
//     console.log('성인')
// }

// if (age < 18) {
//     console.log('청소년')
// }

// for loop (for 반복문)
// for (var i=0; i<10; i++) {
//     // 반복적으로 실행이 된다
//     console.log(i)
// }

// var
// var, let, const

// declaration (변수 선언) 선언하고
// var name;

// // 나중에 정의할 수 있다
// name = '제네시스'

// console.log(name)


// var car = '제네시스'
// // 재정의 가능
// car = '스타리아'

// console.log(car)

// // 선언하고
// var car = '제네시스'
// // 재선언 가능
// var car = '스타리아'

// console.log(car)

// var person;
// var age = 20

// if (age >= 18) {
//     person = '성인'
// } else {
//     person = '청소년 또는 어린이'
// }

// console.log(person)

// var num = 0;
// var i;

// for (i=1; i<11; i++) {
//    console.log('hello')
//    num += i; 
// }

// console.log(num)


// Object and Array

// Object
// var car = {
//     // key : value
//     name: '제네시스',
//     year: 2022,
//     color: '검정',
//     sound: function () { // value가 함수인 것을 Method (메서드)라고 한다
//         return '부웅'
//     }
// }
// // name, year, color = property (속성)

// console.log(car)
// console.log(car.name) // 속성에 접근
// console.log(car.year)
// console.log(car.color)
// console.log(car.sound()) // Method에 접근(호출)

// Array 

// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"]

// console.log(cars)

// console.log(cars[0]) // index 0 에 접근
// console.log(cars[3]) // index 3 에 접근

// console.log(cars.length) // Array의 value의 개수

// var cars = [
//     { name: '제네시스', design: 10 },
//     { name: '스타리아', design: 9 },
//     { name: '아이오닉', design: 8 },
//     { name: '캐스퍼', design: 7 },
// ]

// // Template literal
// // String (문자)안에서 변수를 사용할 수 있다
// // ``
// for (var i=0; i<cars.length; i++) { // i = index
//     // console.log(
//     //     "자동차 이름: " + cars[i].name + ", 디자인: " + cars[i].design + "점"
//     // )
//     console.log(`자동차 이름: ${cars[i].name}, 디자인: ${cars[i].design}점`)
// }

// console.log(cars[0].design)

// 콘솔에 for loop을 이용해서 찍어보세요

// 자동차 이름: 제네시스, 디자인: 10점
// 자동차 이름: 스타리아, 디자인: 9점
// 자동차 이름: 아이오닉, 디자인: 8점
// 자동차 이름: 캐스퍼, 디자인: 7점

// var cars = [
//     { name: '제네시스', design: 10 , color: ["검정", "화이트", "실버"] },
//     { name: '스타리아', design: 9, color: ["블루", "레드"] },
//     { name: '캐스퍼', design: 8, color: ["그린", "베이지"] },
// ]

// // 제네시스의 화이트 색상에 접근해보기
// console.log(cars[0].color[1]);

// DATA TYPE
// String (문자)
// Number (숫자)
// Boolean (true or false)
// undefined
// null

// var fruit = 'apple'
// toUpperCase 대문자로 변환
// var result = fruit.toUpperCase();

// var fruit = 'APPLE';
// toLowerCase() 소문자로 변환
// var result = fruit.toLowerCase();

// console.log(result);
// console.log(result.length);

// var x = 20
// var y = "22"

// // Number() 문자를 숫자로 변환
// y = Number(y);

// // toString() 숫자를 문자로 변환 
// y = y.toString();

// console.log(typeof (x + y)) // string
// console.log(x + y);

// var cars = ["제네시스", "스타리아"]

// console.log(cars)

// // push(value) 새로운 value 추가
// cars.push("아이오닉")
// cars.push("캐스퍼")

// console.log(cars)
// console.log(cars.length)

// // pop(value) value 제거 (가장 마지막)
// cars.pop()

// console.log(cars)

// // includes(value) vale를 포함했는지 여부, true or false
// var bool = cars.includes("캐스퍼");

// console.log(bool);

// Function and Method (함수와 메서드)


// Object
// var car = {
//     // key: value
//     name: '제네시스', // property (속성)
//     onSale: true, // property (속성)
//     sound: function () { // method (메서드)
//         return '부릉'
//     }
// }

// // Method and Function
// // Method는 객체에 속해있다

// console.log(car.name)
// console.log(car.onSale)
// // Method (메서드) 
// console.log(car.sound())

// // Function (함수)
// hello()
// window.hello()

// console.log(window)

// function hello() {
//     console.log('hello world')
// }

// var fruit = 'apple'

// // toUpperCase()
// var result = fruit.toUpperCase();

// console.log(result)

// // result의 프로토타입 객체에 접근 
// console.log(result.__proto__)

// var num = 0

// console.log(num.__proto__)

// Function

// Function declaration, expression (함수선언식, 함수표현식)

// Declaration 함수선언식
// function hello() {
//     console.log("hello")
// }

// Expression 함수표현식
// 변수에 익명함수를 담는다
// var hello = function() {
//     console.log('hello')
// }
// hello()

// f()
// Hoisting (게양)
// 함수의 정의는 호출보다 올라간다
// function f() {
//     console.log('hello')
// }

// expression 함수표현식은 hoisting이 되지 않는다
// f() // error
// var f = function () {
//     console.log('hello')
// }
// f() // ok

// return

// f();
// function f() {
//     // console.log('hello')
//     // return;
//     // console.log('world');

//     return console.log('hello');
//     console.log('world')
// }

// parameter (인자)

// function f(a, b) {
//     return a + b
// }

// var result = f(20, 22)

// console.log(result)

// function isAdult(age) {
//     if (age >= 18) {
//         return '성인'
//     } else {
//         return '청소년 또는 어린이'
//     }
// }

// var a = isAdult(20)
// var b = isAdult(10)

// console.log(a)
// console.log(b)

// var fruits = ["apple", "banana", "orange", "mango"];

// var result = [];

// for (i=0; i<fruits.length; i++) { // i = index
//     result.push(fruits[i].toUpperCase())
// }

// console.log(result)

// Callback Function (콜백 함수)
// 다른 함수의 인자가 되는 함수


// function myFunction(cb) {
//     console.log(1)
//     cb()
// }

// function myCallback() {
//     console.log(2)
// }

// // 콜백함수에서 ()는 제거한다
// myFunction(myCallback)

// function myFunction(cb) {
//     console.log('hello')
//     cb('world')
// }

// function myCallback(data) {
//     console.log(data)
// }

// // myFunction(myCallback(data)) // error
// myFunction(function (data) { // ok
//     myCallback(data)
// })

// function myFunction(cb) {
//     console.log(1)
//     cb()
// }

// myFunction(function() {
//     console.log(2)
// })

// function myFunction(cb) {
//     console.log(1)
//     cb()
// }

// function myCallback(data) {
//     console.log(data)
// }
// // 콜백함수에 인자가 있을 때는 익명함수가 필요하다

// // myFunction(myCallback(2)) // error

// myFunction(function () {
//     myCallback(2)
// })


// forEach, filter

// var fruits = ['apple', 'banana', 'orange'];
// var result = [];

// // forEach(callback) Array의 길이만큼 callback 함수가 반복 실행된다
// fruits.forEach(function (value) {
//     result.push(value.toUpperCase())
// })

// console.log(result)

// var ages = [10, 20, 30];

// // filter() 조건에 맞는 새로운 Array를 return한다
// var result = ages.filter(function (value) {
//     if (value > 18) {
//         return value;
//     }
// })

// console.log(result)


// 판매중인 자동차의 Array를 만들어보세요
// var cars = [
//     { name: '제네시스', onSale: true },
//     { name: '스타리아', onSale: true },
//     { name: '아이오닉', onSale: true },
//     { name: '포니', onSale: false },
//     { name: '캐스퍼', onSale: true },
// ];

// var result = cars.filter(function (value) {
//     if (value.onSale === true) {
//         return value;
//     }
// })

// console.log(result)

// function myFunction(cb) {
//     cb('hello')
// }

// function myCallback(data) {
//     console.log(data)
// }

// myFunction(myCallback)

// myFunction(function (data) {
//     myCallback(data)
// })

// JavaScript 2

// # ES6 (2015년)
// let, const (변수)
// arrow function (화살표 함수)
// 기타: destructing(구조화), spread operator, ternary(삼항 연산자)
// Promise

// # 데이터 저장 및 전송: cookie, localStorage, json
// 로그인, 장바구니
// 쿠키보다 저장 용량이 많다 (5MB)
// 쿠키보다 안전하다


// # JSON
// JavaScript Object Notation
// 데이터를 저장하거나 전송할 때 쓴다 
// string(문자)

// Object
// var car = { name: '제네시스' }

// JSON형식 : '{ "key": "value" }'
// var car = '{ "name": "제네시스" }'

// console.log(car.name)


// var car = { name: '제네시스' }

// // JSON.stringify(Object): Object를 JSON 포맷으로 만든다
// var result = JSON.stringify(car)

// console.log(typeof result)
// console.log(result)

// var car  = '{ "name": "제네시스" }'

// // JSON.parse(string) string을 Object로 만든다
// var result = JSON.parse(car)

// console.log(typeof result)
// console.log(result)


// var car = { name: '제네시스' }

// var txt = JSON.stringify(car)

// localStorage.setItem('car', txt)

// var obj = JSON.parse(localStorage.getItem('car'))

// console.log(typeof obj)
// console.log(obj)
// console.log(obj.name)

// var cars = [
//     { name: '제네시스' },
//     { name: '스타리아' },
//     { name: '캐스퍼' },
// ]

// console.log(cars)

// console.log(JSON.stringify(cars))


// # JavaScript variable(변수): var / let / const

// var
// let - block scope (블록 범위)
// const = block scope (블록 범위)

// variable Scope (변수의 범위)
// 1 Global scope (전역 범위): 블록과 함수 밖에서 변수의 범위
// 2 Block scope (블록 범위): 블록안에서의 변수의 범위
// 3 Function scope (함수 범위): 함수안에서의 변수의 범위


// var car = '제네시스'
// var car = '스타리아' // redeclare 재선언 가능

// var car = '제네시스'
// car = '스타리아' // redefine 재정의 가능

// console.log(car)


// var car; // declare 선언하고
// car = '제네시스' // define 정의 가능

// console.log(car)

// var person;
// var age = 20;

// if (age > 18) {
//     person = '성인'
// } else {
//     person = '청소년'
// }

// console.log(person)

// var age = 20;

// if (age > 18) {
//     var person = '성인'
// } else {
//     var person = '청소년'
// }

// console.log(person)


// let

// let car = '제네시스'
// let car = '스타리아' // redeclare 불가


// let car = '제네시스'
// car = '스타리아' // redefine 재정의 가능


// let car; // declare 선언하고
// car = '제네시스' // define 정의 가능

// let age = 20
// let person;

// if (age > 18) {
//     person = '성인'
// } else {
//     person = '청소년'
// }

// console.log(person)

// 가장 엄격
// const

// const car = '제네시스'
// const car = '스타리아' // redeclare 재선언 불가

// const car = '제네시스'
// car = '스타리아' // redefine 재정의 불가

// const car; // declare 선언하고
// car = '제네시스' // define 정의 불가

// console.log(car)


// scope 변수의 범위
// global 전역 범위: 함수, 블록 밖에서 선언
// block 블록 범위: 블록 안에서 선언 {}
// function 함수 범위: 함수 안에서 선언


// // global 전역 범위
// var car = '제네시스';


// // {
// //     console.log(car)
// // }

// // if (true) { // {}
// //     console.log(car)
// // }

// f()
// function f() {
//     console.log(car)
// }


// { // 블록안에서 선언 
//     var car = '제네시스'
// }


// if (true) { // block 블록범위
//     var car = '제네시스'
// }

// console.log(car)

// f()
// function f() {
//     // function 함수범위
//     var car = '제네시스'
// }
// 함수밖에서 접근 불가
// console.log(car)


// // 전역 범위
// var car = '제네시스'

// f()
// function f() {
//     // 함수 범위
//     var car = '스타리아'
//     // 함수 범위 안에서 부터 찾는다
//     console.log(car)
// }

// console.log(car)

// // global 전역범위
// let car = '제네시스'


// { // for, if 
//     console.log(car)
// }


// { // for, if
//     // 블록 범위
//     let car = '제네시스'
// }

// console.log(car)

// let person;

// if (true) {
//     // define 정의
//     person = 'adult'
// }

// console.log(person)

// if (true) {
//     // block 블록범위
//     let person = 'adult'
// }

// console.log(person)


// global 전역 범위
// let car = '제네시스'

// f()
// function f() {
//     console.log(car)
// }

// f()
// function f() {
//     // 함수 범위
//     let car = '제네시스'
// }

// console.log(car)

// 전역범위
// constant 상수
// 가장 엄격
// const car = '제네시스';


// // 전역범위
// const car = '제네시스'

// { // for, if
//     console.log(car)
// }

// if (true) { // block 블록 범위
//     console.log(car)
// }

// // 선언하고 정의 불가
// const car;

// { // block, for, if
//     car = '제네시스'
// }

// console.log(car)

// {
//     // 블록 범위, for, if
//     const car = '제네시스'
// }

// if (true) {
//     // 블록 범위, for, if
//     const car = '제네시스'
// }

// // 블록 밖에서 접근 불가
// console.log(car)


// // global 전역 범위
// const car = '제네시스'

// function f() {
//     // 함수안에서 접근 가능
//     console.log(car)
// }

// f()


// // global
// const car = '제네시스'

// f()
// function f() {
//     // function
//     const car = '스타리아';
//     // 함수범위 안에서 먼저 찾는다
//     console.log(car)
// }

// console.log(car)


// { // for, if
//     const car = '제네시스'
// }

// {
//     const car = '스타리아'
// }

// {
//     const car = '캐스퍼'
// }

// // 블록밖에서 접근 불가
// console.log(car)

// {
//     var car = '제네시스'
// }
// {
//     var car = '스타리아'
// }
// {
//     let car = '캐스퍼'
// }

// console.log(car)


// 함수의 정의
// function declaration 함수선언식
// function expresssion 함수표현식

// 함수선언식: function + 함수이름 + ()
// function f() {
//     console.log(".")
// }

// f()


// // Hoisting 함수의 정의가 더 올라간다
// f()

// function f() {
//     console.log("제네시스")
// }

// 함수 표현식
// 변수에 익명함수(function + ())를 담는다 
// const f = function () {
//     console.log('제네시스')
// }

// f()


// 함수표현식에서는 Hoisting이 되지 않는다
// Hoisting: 함수의 정의가 더 올라간다
// f();

// var f = function () {
//     console.log('제네시스')
// }


// 함수표현식
// var f = function () {
//     console.log('제네시스')
// }

// arrow function: () => {}
// var f = () => {
//     console.log('제네시스')
// }

// // hoisting이 되지 않는다
// // hoisting: 정의가 더 올라간다
// f()

// var f = (data) => { // parameter
//     console.log(data)
// }

// f("제네시스") // argument (인자)

// var f = (data1, data2) => { // params1, params2, ...
//     console.log(data1)
//     console.log(data2)
// }

// f('제네시스', '스타리아') // args1, args2, ...

// params가 하나인 경우에 () 생략 가능
// var f = data => {
//     console.log(data)
// }

// f('제네시스')

// 한줄일 경우 {} 생략 가능
// var car = data => console.log(data); 

// car('제네시스')


// && 연산자 
// ternary 삼항연산자

// const car = '제네시스'

// // 참 && 실행
// car && console.log(car)

// const car = null;

// // null은 조건에서 false
// car && console.log(car)

// const car = undefined; // ok
// // const car; // error

// // undefined은 조건에서 false
// car && console.log(car)

// const age = 20;

// // 조건 ? 참 : 거짓일 경우
// const person = age > 18 ? 'adult' : 'kids';

// console.log(person)

// Destructing 구조분해할당
// Spread Operator 
// Obejct와 Array의 표현을 간단하게 만든다

// Destructing

// const cars = ['제네시스', '스타리아', '캐스퍼'];

// // index를 통해 접근
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];

// console.log(car2)


// const cars = ['제네시스', '스타리아', '캐스퍼'];

// // const [car1, car2, car3] = cars
// // const [car1,,car3] = cars

// // console.log(car1)
// // // console.log(car2) // error
// // console.log(car3)

// // const [car1, car2] = cars

// // console.log(car1)
// // console.log(car2)
// // // console.log(car3)

// const [,,car3] = cars

// console.log(car3)


// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;

//     return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7)

// console.log(add)
// console.log(subtract)
// console.log(multiply)
// console.log(divide)

// Object destructing

// const car = {
//     brand: '현대',
//     model: '제네시스',
//     color: 'black',
//     cost: 500
// }

// f(car)

// function f(data) {
//     console.log(data.brand)
//     console.log(data.model)
//     console.log(data.color)
//     console.log(data.cost)
// }

// const car = {
//     brand: '현대',
//     model: '제네시스',
//     color: 'black',
//     cost: 500
// }

// f(car)
// function f({ brand, model, color, cost }) {
//     console.log(brand)
//     console.log(model)
//     console.log(color)
//     console.log(cost)
// }

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     // nested 
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }
  
//   myVehicle(vehicleOne)
  
//   function myVehicle({ model, registration: { state, city } }) {
//     const message = 'My ' + model + ' is registered in ' + state + '.';
//   }


// spread operator
// ...

// const cars = ['제네시스', '스타리아', '아이오닉']
// const more = ['캐스퍼']

// // concat()

// const result = [ ...cars, ...more ]

// console.log(result)


// const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼']
// // destruncting + spread operator
// const [car1, car2, ...rest] = cars

// console.log(rest)

// const car1 = {
//     brand: '현대',
//     model: '제네시스'
// }

// const car2 = {
//     color: 'black',
//     cost: 500
// }

// const car = { ...car1, ...car2 }

// // const car = {
// //     brand: car1.brand,
// //     model: car1.model,
// //     color: car2.color,
// //     cost: car2.cost
// // }

// console.log(car)

// const car1 = ['제네시스', '스타리아']
// const car2 = ['아이오닉', '캐스퍼']

// // array1.concat(array2) array1과 array2를 합친다
// // Concatenating (순차)
// // const car = car1.concat(car2)

// const car = [ ...car1, ...car2 ]

// console.log(car)

// const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼'];

// // slice, splice

// const rest = cars.slice(2)

// console.log(rest)


// const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼'];
// const [car1, car2, ...rest] = cars

// console.log(rest)


// Callback and Promise
// Asynchronous (비동기) vs Synchronous (동기)


// Error handling: try catch 


// Uncaught ReferenceError
// console.log(car)


// try {
//     console.log(car)
// } catch (err) { // Uncaught
//     console.error(err)
// } finally { // 무조건 실행되는 부분, 없어도 된다
//     console.log('끝')
// }


// let age = 20

// try { 
//   if(age > 18)  {
//     console.log('성인')
//   } else if (age < 17 && age > 13) {
//     console.log('청소년')
//   } else {
//       // custom error
//       throw "어린이"
//   }
// }
// catch(err) {
//   console.error(err)
// }
// finally { // 생략 가능, 무조건 실행되는 부분 
//   console.log('끝')
// }

// prototype 기반 언어 - JavaScript
// class 기반 언어 - C++ ,Java
// inheritance 상속


// const car = {
//     name: '제네시스',
//     sound: function () {
//         return '부릉'
//     }
// }

// console.log(car)
// console.log(car.sound())

// const fruit = 'apple'

// console.log(fruit.__proto__)

// console.log(fruit.toUpperCase())


// String의 instance를 만든다
// const fruit = 'apple'
// const fruit = new String("apple");

// console.log(fruit)


// class User { // syntax sugar
//     constructor(username) {
//         this.username = username
//     }
// }

// const user = new User("car")

// // User class의 인스턴스
// console.log(user)

// function User(username) { // Object constructor
//     this.username = username
// }

// var user = new User('cat')

// console.log(user)


// class User {
//     constructor(username) {
//         this.username = username
//     }
// }

// class UserBusiness extends User {
//     constructor(username, location) {
//         super(username)
//         this.location = location
//     }
// }

// // UserBusiness class의 instance 
// const userBusiness = new UserBusiness("현대자동차", "서울")
// // const fruit = new String("apple")

// console.log(userBusiness)

// var fruit = new String('apple')

// console.log(fruit.__proto__)
// console.log(fruit.__proto__.__proto__)



// // new: 인스턴스를 만든다
// var apple = new String('apple')
// var banana = new String('banana')
// var orange = new String('orange')

// // TypeScript JavaScript에 Type추가
// var car: string = '제네시스';

// express: javascript
// NestJS: typescript, java spring


// class User {
//     constructor(username) {
//         this.username = username
//     }
// }

// function User(username) {
//     this.username = username;
// }

// const bunny = new User('bunny')

// const cat = new User('cat')

// var car = '제네시스'

// var car = new String('제네시스');
// console.log(car.__proto__);


// // instance of String
// var apple = new String('apple') // var apple = 'bunny'
// // instance of String
// var banana = new String('banana')
// // instance of String
// var orange = new String('orange')

// console.log(apple)
// console.log(banana)
// console.log(orange)


// Callback and Promise

// Asynchornous and Synchronous (비동기와 동기)

// Sync: 순서대로 실행된다

// Async: 빠른 것부터 실행된다


// Sync
// console.log(1)
// console.log(2)


// setTimeout 대표적인 비동기 함수
// setTimeout(callback, seconds): seconds뒤에 callback 실행
// setTimeout(() => {
//     console.log(1)
// }, 1000)

// console.log(2)


// 제일 뒤로가서 실행된다
// setTimeout(() => {
//     console.log(1)
// }, 0)
    
// console.log(2)

// setTimeout의 callback 안에서는 동기적으로 작동한다
// setTimeout(() => {
//     console.log(1)
//     console.log(2)
// }, 0)

// function fetchData() {
//     setTimeout(() => {
//         const user = { username: 'bunny' };
//         return user;
//     })
//     // const user = { username: 'bunny' };
//     // return user;
// }

// const data = fetchData()

// console.log(data)

// // fetchData() 제일 마지막에 실행된다


// function fetchData() {
//     setTimeout(() => {
//         const user = { username: 'bunny' };
//         console.log(user)
//     })
// }

// fetchData()


// function fetchData(cb) {
//     setTimeout(() => {
//         const user = { username: 'bunny' };
//         cb(user)
//     })
// }

// // fetchData(익명 함수)
// fetchData(data => console.log(data))

// fetchData(function (data) {
//     console.log(data)
// })


// function first() {
//   setTimeout(() => {
//     console.log(1)
//   }, 400)
// }
// function second() {
//   setTimeout(() => {
//     console.log(2)
//   }, 200)
// }
// function third() {
//   setTimeout(() => {
//     console.log(3)
//   }, 100)
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// first()
// second()
// third()
// fourth()

// function first(cb) {
//     setTimeout(() => {
//       console.log(1)
//       cb()
//     }, 400)
//   }
//   function second(cb) {
//     setTimeout(() => {
//       console.log(2)
//       cb()
//     }, 200)
//   }
//   function third(cb) {
//     setTimeout(() => {
//       console.log(3)
//       cb()
//     }, 100)
//   }
//   function fourth() {
//     setTimeout(() => {
//       console.log(4)
//     }, 300)
//   }
  
// // first(() => second(() => third(fourth)))

// first(function () {
//     second(function () {
//         third(fourth)
//     })
// })

// Callback Error handling

// function fetchData(cb) {
//     setTimeout(() => {
//         const user = { username: 'bunny' }
//         const error = { message: 'user not found' }
//         // error를 넘김
//         // cb(error, null)

//         // value를 넘김
//         cb(null, user)
//     })
// }

// fetchData((err, data) => {
//     if (err) {
//         return console.error(err)
//     }
//     console.log(data)
// })


// Promise
// const fetchData = new Promise(res => {
//     setTimeout(() => {
//         const user = { username: 'bunny' }
//         // resolve 성공
//         res(user)
//     })
// })

// fetchData.then(data => console.log(data))


// const fetchData = new Promise((res, rej) => {
//     setTimeout(() => {
//         const user = { username: 'bunny' }
//         const error = { message: 'user not found' }
//         // reject (실패)
//         rej(error)
//     })
// })

// // fetchData.then(success, fail)
// // fetchData.then(
// //     val => console.log(val),
// //     err => console.error(err)
// // )

// fetchData
// .then(val => console.log(val))
// .catch(err => console.error(err))


// async / await
// 비동기함수를 동기적으로 실행한다

// const fetchData = new Promise(res => {
//     setTimeout(() => {
//         const user = { username: 'bunny' }
//         res(user)
//     })
// })

// f()
// async function f() {
//     // await은 async안에서만 작동한다
//     const data = await fetchData // pending

//     console.log(data)
// }


// function first() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 400)
//   })
// }
// function second() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(2)
//       res()
//     }, 200)
//   })
// }
// function third() {
//   return new Promise(res => {
//     setTimeout(() => {
//       console.log(3)
//       res()
//     }, 100)
//   })
// }
// function fourth() {
//   setTimeout(() => {
//     console.log(4)
//   }, 300)
// }

// // first()
// // .then(second)
// // .then(third)
// // .then(fourth)

// f()
// async function f() {
//     await first() // 끝날 때 까지 기다린다
//     await second()
//     await third()
//     fourth()
// }


startPage();

function startPage() {
  let button = {
    type: 'div',
    props: {},
    children: [
      { type: 'h1', props: {}, children: ['저녁반 프론트엔드 조추첨!'] },
      { type: 'button', props: { 'onClick': () => createGroup(false) }, children: ['Test'] },
      { type: 'button', props: { 'onClick': () => createGroup(true) }, children: ['Go'] }
    ]
  }
  
  document.getElementById('root').replaceChildren(createElement(button));
}

function createGroup(isReal) {

  if (!isReal) {
    return controller();
  }

  let loadPage = {
    type: 'h1', props: {}, children: ['추첨중...']
  }
  document.getElementById('root').replaceChildren(createElement(loadPage))

  setTimeout(controller, 10000)

  function controller() {
    let numbers = []
    
    for (let i=1; i<=30; i++) {
      numbers.push(i)
    }
    
    numbers.sort(() => 0.5 - Math.random())
    
    let groups = {}
  
    for (i=1; i<=6; i++) {
      groups[i + '조'] = numbers.splice(0, 5);
    }
  
    let groupList = Object.keys(groups).map(key => {
      return { type: 'li', props: {}, children: [
        { type: 'h2', props: {}, children: [`${key}: ${groups[key].toString()}`] }
      ] }
    })
    
    let element = {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['결과']},
        { type: 'ul', props: {}, children: groupList },
        { type: 'button', props: { 'onClick': startPage }, children: ['처음으로'] }
      ]
    }
  
    document.getElementById('root').replaceChildren(createElement(element))
  }
}


function createElement(node) {
    try {
      if (typeof node === 'string') {
        return document.createTextNode(node)
      }
  
      const $el = document.createElement(node.type);
  
      Object.keys(node.props).map(prop => {
        if (prop.match(/^on/)) {
          $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop]) 
        } else if (typeof node.props[prop] === 'boolean') {
          if (node.props[prop]) {
            $el.setAttribute(prop, '')
          } 
        } else {
          $el.setAttribute(prop, node.props[prop])
        }
      })
      
      node.children.map(c => {
        $el.appendChild(createElement(c))
      })
  
      return $el;
      
    } catch (err) {
      console.error(err);
    }
  }

    





























































