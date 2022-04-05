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

// var cars = [ // 0 부터 시작
//     { name: '레이', color: '은색' }, // index 0
//     { name: '제네시스', color: '검은색' }, // index 1
//     { name: '볼보', color: '흰색' } // index 2
// ] 

// console.log(cars)

// console.log(cars[2]) 
// console.log(cars[2].color)

// console.log(cars.length)

// Callback, 다른 함수의 parameter(인자)가 되는 함수


// // declare 함수 정의
// function myCallback() {
//     console.log(2)
// }

// // declare 함수 정의
// function myFunction(cb) { 
//     console.log(1)
//     cb()
// }

// // invoke 함수 호출
// myFunction(myCallback) // cb => myCallback()

// function myCallback() {
//     return 'hello'
// }

// function myFunction(cb) {
//     console.log(cb())
// }

// // myFunction(myCallback()) // error 
// myFunction(myCallback) // ok

// function myCallback(data) {
//     return data
// }

// function myFunction(cb) {
//     console.log(cb('hello'))
// }

// myFunction(function(data) {
//     myCallback(data)
// })


// Data type (데이터 타입)
// String 문자
// Number 숫자
// undefined 정의되지 않음
// null
// boolean - true or false

// Object
// Array 

// var fruit = 'apple'

// 문자열의 길이
// console.log(fruit.length)

// var fruits = 'apple, banana, mango' // index(인덱스) 0부터 시작함

// console.log(fruits.slice(7, 13)) // 7번째 글자부터 13번째 글자 전까지
// console.log(fruits.slice(7)) // 7번째 글자부터 끝까지

// console.log(fruits.substring(7, 13)) // 7번째 글자부터 13번째 글자 전까지
// console.log(fruits.substr(7, 6)) // 7번째 글자부터 6개 추출

// var text = 'HTML/CSS is fun';

// // Uppercase 대문자
// // Lowercase 소문자
// // CamelCase 낙타의 등
// var newText = text.replace('HTML/CSS', 'JavaScript'); // replace(바꿀 글자, 대체 글자)

// console.log(newText)

// var js = 'javaScript'; // lowerCamelCase, UpperCamelCase

// var uc = js.toUpperCase()
// var lc = js.toLowerCase() 

// console.log(uc)
// console.log(lc)

// var h = 'HTML/CSS'

// var js = 'JavaScript'

// 문자열을 합친다
// var result = h.concat(" ", js);

// console.log(result)
// console.log(h + " " + js)

// var h = "     HTML/CSS JavaScript    "

// // 양쪽에 있는 여백을 없엔다
// var result = h.trim();

// console.log(result);


// var js = 'JavaScript' // 0번째 부터 시작

// // var result = js.charAt(0); // 0번째 글자
// var result = js[0] // 문자[index], 0번째 글자

// console.log(result)

// var fruits = 'apple, banana, mango';

// var result = fruits.split(','); // return array (배열을 반환한다)

// console.log(result);

// var url = 'google.com/search/q?=사과'

// var result = url.split('/');

// console.log(result[0]);

// var h = 'html css javaScript';

// // var result = h.indexOf('css'); // 순서를 반환한다

// // var result = h.indexOf('x'); // 글자가 없으면 -1 반환

// // var result = h.indexOf('l'); 

// // var result = h.indexOf('t'); // 1개 이상일 경우 앞에 문자의 INDEX 반환


// // var result = h.search('h');
// // var result = h.search('H'); // -1

// console.log(result)

// var num = 2022

// console.log(num)
// console.log(typeof num)

// console.log(num.toString()) // toString() 값을 문자열로 변환
// console.log(typeof num.toString())

// console.log(typeof '2022') // 값은 숫자, 타입은 문자
// console.log(Number('2022'))
// console.log(typeof Number('2022'))

// console.log(Number(true)) // 1
// console.log(Number(false)) // 0

// console.log(Number('javaScript')) // NaN (Not a number)

// var result = 100 / 'javaScript'; // NaN (Not a number);

// console.log(result)


// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// var result = cars.toString();

// console.log(typeof result);
// console.log(result);

// var result = cars.join(' 그리고 ');

// console.log(typeof result)
// console.log(result)

// cars.pop(); // 마지막 값을 제거한다
// console.log(cars)

// cars.push('아반떼')
// console.log(cars)

// cars.shift(); // 첫번째 값을 제거한다

// console.log(cars)

// delete cars[0];

// console.log(cars)

// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// cars[3] = "코나"

// console.log(cars)

// var kia = ["카니발", "레이"]

// var japan = ['렉서스', '혼다']

// var sweden = ["볼보"]

// // var result = cars.concat(kia)

// // var result = kia.concat(cars) // array.concat(array) 두 배열을 합친다.

// var result = cars.concat(kia, japan, sweden)

// console.log(result)


// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// cars.splice(2, 0, "코나") // Array.splice(index, 제거할 값, 추가될 값)

// console.log(cars)

// cars.splice(2, 2, "코나"); // Array.splice(index, count, new value)

// console.log(cars)


// cars.splice(0, 1); // 제네시스 
// cars.splice(1, 1) // 스타리아

// console.log(cars)

// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// // var result = cars.slice(2); // Array.slice(index) => 아이오닉, 캐스퍼
// // console.log(result)

// // var result = cars.slice(1, 3); // index 1, 2

// // console.log(result)

// cars.sort();
// console.log(cars)

// var numbers = [20, 22, 3, 24]

// // ascending 오름차순으로 정렬
// numbers.sort(function(a, b) { return a - b });
// console.log(numbers)

// // descending 내림차순으로 정렬
// numbers.sort(function (a, b) { return b - a })
// console.log(numbers)


// function myFunction(cb) {
//     cb()
// }

// myFunction(function () {
//     console.log('...')
// })

// function myFunction(cb) {
//     cb('...')
// }

// myFunction(function (d) {
//     console.log(d)
// })

// function myCallback() { // callback(콜백함수) - 다른 함수의 parameter(인자)가 되는 함수
//     console.log(2)
// }

// function myFunction(cb) {
//     console.log(1)
//     cb()
// }

// // myFunctino(함수의 정의)
// myFunction(myCallback()) // invok (호출)
// myFunction(myCallback) // define (함수의 정의가 있어야 함)

// function myFunction(cb) {
//     console.log(1) // 1번
//     cb() // 2번
// }

// myFunction(function () { // Anoymous (익명함수)
//     console.log(2)
// })


// function myFunction(cb) {
//     console.log(1) // 1번
//     console.log(cb()) // 2번
// }

// myFunction(function () {
//     return 2
// })

// function myFunction(cb) {
//     console.log('hello')
//     cb('world') // parameter 인자
// }

// myFunction(function (data) {
//     console.log(data)
// })

// function myFunction(cb) {
//     console.log('hello') // 1번
//     console.log(cb('world')) // 2번
// }

// myFunction(function (data) {
//     return data;
// })


// var numbers = [20, 22, 3, 24]

// var result = 0;

// numbers.forEach(myFunction) // forEach(callback)

// console.log(result);

// // Hoisting 함수의 정의가 자동으로 가장 위로 간다.
// function myFunction(value, index, array) { // 4번(Array.length) 실행된다
//     // console.log(value);
//     // result += value;
//     result = result + value;
// }

// var num = 0;

// // for (i=0; i<5; i++) { // 4번 실행된다
// //     num += i;
// //     // num = num + i
// // }

// num = num + 0;
// num = num + 1;
// num = num + 2;
// num = num + 3;
// num = num + 4;

// console.log(num)


// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// // 노동
// // console.log(cars[0])
// // console.log(cars[1])
// // console.log(cars[2])
// // console.log(cars[3])

// for (i=0; i<cars.length; i++) {
//     console.log(cars[i])
// }

// var numbers = [20, 22, 3, 24]

// var result = numbers.map(myFunction)

// console.log(result)

// function myFunction(value, index, array) {
//     return value * 2;
// }

// var numbers = [20, 22, 3, 24]

// // var result = numbers.filter(myFunction)

// // console.log(result)

// // function myFunction(value, index, array) {
// //     return value > 20
// // }

// var result = numbers.filter(function (value, index, array) {
//     // return value > 20;
//     // console.log('hello world');
    
//     console.log(value)
//     console.log(index)
//     console.log(array)

//     // return array[index] > 20;
// })

// console.log(result)

// var numbers = [20, 22, 3, 24]

// var result = numbers.find(myFunction);

// console.log(result)

// // Hoisting 정의는 자동으로 위로 간다
// function myFunction (value, index, array) {
//     console.log('hello')
//     return value > 21;
// }


// var cars = ["제네시스", "스타리아", "아이오닉", "캐스퍼"];

// for (car of cars) { // [value] of [array]
//     console.log(car)
// }

// for (i in cars) { // [index] in [array]
//     console.log(cars[i])
// }

// var result = "";

// for (car of cars) {
//     // result += car + ' ';
//     result = result + car + " ";
// }

// document.getElementById('root').innerHTML = result;

// Anonymous (익명 함수)
// window.addEventListener('resize', function() {
//     // console.log('...')
//     // console.log(document.body.clientWidth);
//     // console.log(document.body.offsetWidth); 
//     console.log(document.body.clientHeight);
//     console.log(document.body.offsetHeight);
// })

// window.addEventListener('scroll', function () {
//     console.log('...')
// })

// console.log('hello')


// JavaScript variables (변수)
// var
// let - block scope (블록 범위)
// const - block scopre (블록 범위), constant(상수), 가장 엄격


// var fruit = 'apple'
// console.log(fruit)

// var fruit; // declare 선언하고
// fruit = 'apple' // defined 나중에 정의가능

// console.log(fruit)

// var fruit = 'apple' // declare 
// var fruit = 'banana' // declare 재선언이 가능하다

// console.log(fruit)

// var person; // declare 선언하고
// var age = 20

// if (age > 18) {
//     person = 'adult' // 정의 가능
// } else {
//     person = 'kids' // 정의 가능
// }

// console.log(person)

// let

// let fruit = 'apple'

// console.log(fruit)

// let fruit; // declare 선언하고
// fruit = 'apple' // define 정의 가능

// console.log(fruit)

// let fruit = 'apple' // declare
// let fruit = 'mango' // declare 재선언 불가

// console.log(fruit) // error

// let person; // declare 선언하고
// let age = 20;

// if (age > 18) {
//     person = 'adult' // define 정의 가능
// } else {
//     person = 'kids' // define 정의 가능
// }

// console.log(person)

// let fruit = 'apple' // declare 선언하고
// fruit = 'banana' // define 정의 가능
// fruit = 'kiwi' // define 재정의 가능
 
// console.log(fruit)

// const (constant) 상수 

// const fruit = 'apple'
// console.log(fruit)

// const fruit; // assignment(define) 할당을 해야함
// fruit = 'apple'

// console.log(fruit) // error

// const fruit = 'apple' // declare
// const fruit = 'banana' // declare

// console.log(fruit); // error


// 변수의 범위
// Global Scope (전역 범위) - 함수의 밖에서 정의된 변수의 범위
// Function (local) scope (함수 범위) - 함수 내에서 정의된 변수의 범위
// Block scope (블록 범위) - 블록({}) 내에서 정의된 변수의 범위


// var fruit = 'apple' // global scope (전역범위)
// let fruit = 'apple' // global scope (전역범위)
// const fruit = 'apple' // global scope (전역 범위)

// f()

// function f() {
//     console.log(fruit)
// }


// f()

// function f() {
//     // var fruit = 'apple'; // function(local) scope 함수(지역)범위
//     // let fruit = 'apple'; // function (local) scope 함수(지역)범위
//     // const fruit = 'apple';
// }

// console.log(fruit)


// var fruit; // ok
// let fruit; // ok
// const fruit; // error

// f()

// function f() {
//     fruit = 'apple'
// }

// console.log(fruit)

// let fruit = 'apple'

// f()

// function f() {
//     let fruit = 'banana'
//     console.log(fruit)
// }

// console.log(fruit);

// let fruit = 'apple' // global scope(전역 범위)

// f()

// function f() {
//     let fruit = 'banana' // ok

//     console.log(fruit)
// }


// const fruit = 'apple'; // global scope (전역 범위)

// f()
// function f() {
//     const fruit = 'banana'; // function scope (함수 범위)
    
//     console.log(fruit)
// }

// console.log(fruit)


// Block scope(블록 범위)
// let, const

// { // block (if, for loop) 
//     var fruit1 = 'apple'
//     // let fruit2 = 'banana'
//     const fruit3 = 'orange'
// }

// console.log(fruit1)
// // console.log(fruit2)
// console.log(fruit3)


// let age = 20;

// if (age > 18) { // block scopre (블록 범위)
//     let person = 'adult'
// } else {
//     let person = 'kids';
// }

// console.log(person)


// let age = 20;
// // let person; // ok
// const person; // error

// if (age > 18) { // block scopre (블록 범위)
//     person = 'adult'
// } else {
//     person = 'kids';
// }

// console.log(person)

// for (i=0; i<5; i++) { // block scope
//     // var result = i; // ok
//     let result = i; // error (not defined)
// }

// console.log(result)

// let result = 0;

// for (i=0; i<5; i++) {
//     result += i // ok
// }

// console.log(result);


// function declaration 함수선언식 
// function expression 함수표현식

// f()

// function f() { // 함수선언식, hoisting (정의가 위로 올라간다, 게양)
//     console.log('hello')
// }

// f() error

// var f = function () { // function expression (함수표현식), not hoisted 
//     console.log('hello')
// }

// f() // ok

// f() // error

// var f = () => { // Arrow function, not hoisted 
//     console.log('hello')
// }

// f() // ok

// var car = {
//     name: '제네시스',
//     getName: function () {
//         // this
//         // console.log(this) // car (method를 소유한 object)
//         return this.name;
//     }
// }

// var car = {
//         name: '제네시스',
//         getName: () => {
//             // this
//             console.log(this) // window
//             return this.name;
//         }
//     }

// console.log(car.getName())


// var f = () => {
//     return 'hello'
// }

// var f = () => 'hello'


// var f = d => 'hello ' + d // 인자가 하나일 때 () 생략 가능

// console.log(f('부평'))


// addEventListener('load', () => {
//     console.log('hello')
// })

// const f = () => {
//     alert()
// }

// f()

// Prototype and Class
// Inheritance (상속)

// var car = {
//     firstName: '아이오닉',
//     lastName: '현대',
//     fullName: function () { 
//         // this => car
//         return this.lastName + ' ' +  this.firstName
//     }
// }
// console.log(car.fullName())

// var fruit = 'apple'
// console.log(fruit.toUpperCase())

// console.log(fruit.__proto__)

// var num = 0;

// console.log(num.__proto__) // Number
// console.log(num.__proto__.__proto__)

// var arr = []

// console.log(arr.__proto__) // Array
// console.log(arr.__proto__.__proto__) // Object

// var fruit = 'apple'
// console.log(fruit.__proto__)
// console.log(fruit.toUpperCase())


// Object constructor (객체 생성자)
// function Car(name, brand) {
//     this.carname = name;
//     this.brand = brand;
// }

// Car.prototype.origin = '한국'

// var car = new Car('제네시스', '현대');

// console.log(car)
// console.log(car.origin)


// Synthatical sugar (문법적인 조미료)
// class Car {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//     }
// }

// var car = new Car('제네시스', '현대')

// console.log(car);

// var car = new String('제네시스'); // 쓸 이유가 없다

// var car = '제네시스'

// console.log(car)
















































