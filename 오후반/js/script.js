// console.log('hello world');

// window는 생략가능
// window.document.getElementById('root').innerHTML = '<h1>hello world</h1>';

// 주석처리 Ctrl + /

// console.log(1)
// // console.log(2)
// console.log(3)

// JavaScript HTML CSS

/* 
HTML
CSS
JavaScript
*/

// alert('hello world')

// DATA TYPE (데이터 타입)

// var = variable (변수)

// var str; declaration (변수 선언, 변수 정의)
// var str = 'car' assignment (변수 할당)

// var str = 'car' // string, 문자, "", ''
// var num = 2022 // number
// var bool = true // boolean 참 또는 거짓 (true or false)
// var bool2 = false; // boolean 참 또는 거짓 (true or false)
// var nothing = null; // object

// // var something; // undefined (정의되지 않음)
// var something = undefined;

// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof bool)
// console.log(typeof bool2)
// console.log(typeof nothing)

// console.log(something)

// var x = '89'
// var y = 'true'
// var z = 'false'

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)


// var txt = "I'm good"; // ok
// var txt = 'I"m good'; // ok

// // error
// var txt = 'I'm good'; 

// console.log(txt)


// Operator (연산자)
// Arithmetic operator (수리 연산자)
// Assigment operator (할당 연산자)
// Comparison operator (비교 연산자)
// Logical operator (논리 연산자)

// Arithmetic operator
// +, -, *, **, /, %, ++, --

// var x = 8;
// var y = 9;

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

// var x = 2;

// // Exponentation, 제곱 
// console.log(x ** 4)

// var y = 10;

// // Remaider 나머지
// console.log(10 % 3) // 1
// console.log(12 % 4) // 0

// var x = 2;
// var y = 9;

// var a = 10;
// var b = 1;

// // increment 증가
// x++;
// y++;
// // decrement 감소
// a--;
// b--;

// console.log(x)
// console.log(y)

// console.log(a)
// console.log(b)

// var str = 'hello'
// var num = 2022

// console.log(str + num)
// // console.log(typeof str + num) 
// console.log(typeof (str + num))

// var str1 = 'hello'
// var space = ' '
// var str2 = 'world'

// console.log(str1 + space + str2)
// console.log(typeof (str1 + space + str2))

// Assignment operator 할당연산자
// =, +=, -=, *=, /=, %=, **=

// // = 
// var str = 'car'

// // +=
// var x = 10;
// var y = 8;
// var z = 3;
// var a = 15;

// x += 5; // x = x + 5
// y -= 3; // y = y - 3
// z *= 3 // z = z * 3
// a /= 5 // a = a / 5

// console.log(x) // 15
// console.log(y) // 5
// console.log(z) // 9
// console.log(a) // 3

// document.getElementById('root').innerHTML = 'hello'

// // document.getElementById('root').innerHTML = 
// // document.getElementById('root').innerHTML + ' world'

// document.getElementById('root').innerHTML += ' world'\

// Comparison operator 비교연산자
// ==, ===, !=, !==, >, <, >=, <=

// ==

// var x = 1
// var y = 2

// // =
// var result = x == y


// console.log(result) // boolean, false

// var str = '8' // value: 8, type: string 문자
// var num = 8 // value: 8, type: number 숫자

// var result1 = str == num; // value 
// var result2 = str === num; // value and type


// console.log(result1)
// console.log(result2)

// var str = '8' // 문자
// var num = 8 // 숫자

// var result1 = str != num // value, 값이 일치하지 않을때
// // 더 엄격
// var result2 = str !== num // value, type 값 또는 타입이 일치하지 않을때

// console.log(result1)
// console.log(result2)


// Logical operator 논리연산자
// &&, ||, !

// && and(그리고)

// var n = 3;

// if (n > 1 && n < 5) {
//     console.log('good')
// } else {
//     console.log('bad')
// }

// var str = '8'

// if (str == 8 && str < 10) { // good or bad
//     console.log('good') 
// } else {
//     console.log('bad')
// }

// || or(또는)

// var str = '8';

// if (str === 8 || str > 5) { // good or bad
//     console.log('good')
// } else {
//     console.log('bad')
// }

// ! not(부정)


// var x = 8
// var y = 9

// var result = (x == y) // false
// var result = !(x == y) // true

// console.log(result)


// var nothing = null;

// // boolean에서는 false취급된다

// if (!nothing) { // good or bad
//     console.log('good')
// } else {
//     console.log('bad')
// }

// var something;
// // undefined도 boolean에서는 false로 취급된다

// if (something === undefined) { // good or bad
//     console.log('good')
// } else {
//     console.log('bad')
// }

// condition (조건문)
// if, switch

// var carPrice = 1000;

// if (carPrice > 2000) {
//     console.log('비싸다')
// } else {
//     console.log('살 만한데?')
// }

// var carPrice = 1000;

// if (carPrice > 2000) {
//     console.log('비싸다')
// } else if (carPrice > 1500) {
//     console.log('살 만한데')
// } else if (carPrice >= 1000) {
//     console.log('괜찮다')
// } else {
//     console.log('싸다')
// }

// switch

// var num = 100

// switch (num) {
//     case 5:
//         console.log('five')
//         break;
//     case 7:
//         console.log('seven')
//         break;
//     case 8:
//         console.log('eight')
//         break;
//     case 10:
//         console.log('ten');
//     default:
//         console.log('sorry');
// }

// loop (반복문)

// for loop (for 반복문)


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// var i;

// for (i=1; i<=10; i = i + 2) { // increment 증가
//     console.log(i)
// }

// var str; // declare 선언

// str = 'hello' // assignment or define 할당 또는 정의

// console.log(str)

// while loop (while 반복문)

// var i = 0;

// while (i<10) {
//     i++ // increment 증가
//     console.log(i)
// }

// Object (객체)
// property and method (속성과 메서드를 가짐)


// brace { key:value, ... }
// var car = {
//     name: '레이',
//     brand: '기아자동차'
// } 

// console.log(car)

// console.log(car.name)
// console.log(car.brand)

// console.log(car["name"])
// console.log(car["brand"])

// function (함수)

// function declaration (함수 정의)

// // declare (정의)
// function myFunction() {
//     console.log('hello')
// }

// // invoke (호출)
// myFunction()

// var myFunction = function () {
//     console.log('hello')
// }

// myFunction();


// defining function (함수를 정의하는 방법)

// // function declaration (함수 선언식, function 함수이름())
// function myFunction() {}
// // function expressions (함수 표현식, 변수에 담는다)
// var myFunction = function () {} 

// self-invoking (자체호출함수)
// 익명함수 = function () {}
// (익명함수)();
// (function () {
//     console.log('hello')
// })();


// function myFunction() {
//     return 'hello';
// }

// console.log(myFunction)

// console.log(myFunction())

// function myFunction() {
//     return 'hello'
// }

// var x = myFunction();

// console.log(x);

// function myFunction(data) { // parameter
//     return data 
// }


// console.log(
//     myFunction('hello') // argument (함수 인자)
// )

// function myFunction(a, b) {
//     return a + b
// }

// var result = myFunction(3, 4);

// console.log(result) 

// function expression 함수 표현식(정의)
// var myFunction = function (a, b) {
//     return a * b
// }

// // assignment (값 할당)
// var result = myFunction(3, 4)

// console.log(result)

// var car = {
//     name: '제네시스', // property 속성
//     color: '검정', // property 속성
//     cost: function () { // method 메서드
//         return 2000
//     }
// }

// console.log(car)

// console.log(car.name) // 제네시스
// console.log(car.color) // 검정
// console.log(car.cost) // function () { ... }
// console.log(car.cost()) // 2000


// function myFunction() {
//     console.log('hello')
// }

// window.myFunction()

// // method 메서드
// car.cost()
// // function 함수
// window.myFunction()

// Array (배열)

// [] square bracket (대괄호)
// var fruits = ['사과', '배', '귤']
// var numbers = [1, 3, 5, 7]

// console.log(fruits)
// console.log(numbers)

var cars = [ // 0 부터 시작
    { name: '레이', color: '은색' }, // index 0
    { name: '제네시스', color: '검은색' }, // index 1
    { name: '볼보', color: '흰색' } // index 2
] 

console.log(cars)

console.log(cars[2]) 
console.log(cars[2].color)

console.log(cars.length)













