// console.log('Hello World');

// console.log('Comments');

// console.log('Hello World');
// // console.log('Hello World');
// console.log('Hello World');

// console.log('Hello World') // JavaScript Comments aside

/* 
HTML
CSS
JavaScript
*/


// # JavaScript Data type
// String (문자)
// Number (숫자)
// Boolean (참, 거짓)
// undefined (정의되지 않음)
// null (무효)

// String
// var car = '제네시스' // single quotes
// var car = "제네시스" // double qutoes

// var car = "현대자동차 '제네시스' 출시" // ok
// var car = '현대자동차 "제네시스" 출시' // ok

// Number 
// var num = 2022
// var r = 3.14

// Boolean
// var bool = true;
// var bool = false;

// undefined

// var cat = undefined;
// console.log(cat)

// var cat;
// console.log(cat)

// null
// 의도적으로 값을 무효
// var cat = null;
// console.log(cat)

// typeof + value: value의 type을 return한다
// console.log(typeof 'kitty') // String
// console.log(typeof 3.14) // Number
// console.log(typeof true) // Boolean
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object

// var cat;

// console.log(cat) // value
// console.log(typeof cat) // type

// var cat = 'kitty'
// console.log(cat) // kitty (value)
// console.log(typeof cat) // string (type)

// # Object(객체) and Array(배열)

// { key: value, ... } // object
// var cat = {
//     name: 'Kitty',
//     age: 1,
//     color: 'Brown',
//     isMale: false,
//     home: null
// }

// console.log(typeof cat)
// console.log(cat)

// console.log(cat.name) // cat의 name 속성(property)에 접근
// console.log(cat['name'])

// Array
// []
// var animals = ['bunny', 'kitty', 'duck']

// console.log(animals)
// // Array의 아이템(value) 갯수
// console.log(animals.length)

// console.log(animals[0]) // Array는 0부터 시작
// console.log(animals[1])
// console.log(animals[2])

// var nums = [3, 6, 9]
// console.log(nums)

// var animals = [
//     { name: 'bunny', age: 1, color: 'Brown' },
//     { name: 'kitty', age: 2, color: 'Black' },
//     { name: 'duck', age: 1, color: 'White' },
// ]

// console.log(animals)
// console.log(animals[1])
// console.log(animals[1].color)

// var animals = [
//     { name: 'bunny', age: 1, color: 'Brown' },
//     { name: 'kitty', age: 2, color: ['Brown', 'White', 'Yellow'] },
//     { name: 'duck', age: 1, color: 'White' },
// ]

// console.log(animals[1].color[0])
// console.log(animals[1].color[1])
// console.log(animals[1].color[2])

// # Method 
// String method

// var cat = 'kitty'

// console.log(cat)
// console.log(cat.toUpperCase()) // 대문자
// console.log(cat.length) // 글자의 개수

// console.log(cat.split('i')) // i를 기준으로 문자열을 나눈 뒤 Array를 return한다

// console.log(cat.slice(1,3)) // slice(start, end)

// console.log(cat.replace('k', 'K')) // replace

// console.log(cat.concat(' ', 'hello')) // concat 문자열을 합친다

// console.log(cat.trim()) // trim() 문자 앞뒤의 공백을 제거한다

// console.log(cat[1]) 

// var num = "2022"

// console.log(num)
// console.log(typeof num) // String

// console.log(Number(num))
// console.log(typeof Number(num)) // Number

// Number Method

// var num = 2022

// console.log(num)

// console.log(num.toString()) // toString(): Number to String

// var num = 3.14

// console.log(num)
// console.log(Math.round(num)) // Math.round() 반올림

// console.log(Math.ceil(num)) // 올림
// console.log(Math.floor(num)) // 내림

// Object , Array method

// var cat = {
//     name: 'Kitty',
//     age: 1,
//     isMale: false,
//     home: null
// }

// // Object.keys(object): object의 key를 array로 return한다
// var result = Object.keys(cat)
// console.log(result)

// Array method

// var animals = ['bunny', 'kitty', 'duck', 'bird']

// console.log(animals)

// array.toString(): array를 ,(comma)로 구분된 문자열로 return한다
// console.log(animals.toString())

// array의 마지막 item을 제거한다
// animals.pop()

// console.log(animals)

// Array의 마지막에 item을 추가한다
// animals.push('dog')

// console.log(animals)

// Array의 첫번째 item을 제거한다
// animals.shift()

// console.log(animals)

// Array.unshift(item) item을 array의 첫번째 index에 추가
// animals.unshift('dog')

// console.log(animals)

// console.log(animals[0]) // Array의 0번째 index에 접근한다

// animals[3] = 'dog'

// console.log(animals)

// animals[animals.length] = 'dog'

// console.log(animals)

// delete animals[0] // array[index] 를 삭제한다, 삭제한 아이템 대신에 undefined 반환한다

// console.log(animals)

// console.log(animals[0]) // undefined


// var newAnimals = ['dog', 'mouse']

// Array.concat(newArray) Array뒤에 newArray를 합친다
// const result = animals.concat(newAnimals)
// console.log(result)

// animals.concat(newAnimals)
// console.log(animals)

// animals.splice(0, 2) // Array.splice(start, 개수) start index부터 (개수)를 삭제한다

// console.log(animals)

// var result = animals.slice(1, 3) // slice(start, end) start index부터 end index 전까지 
// 잘라낸 array를 return한다
 
// console.log(result)

// Array.map(callback)

// Array의 length만큼 실행
// animals.map(function (animal) {
//     console.log(animal)
// })

// animals.map(function (animal) {
//     console.log(animal.toUpperCase())
// })

// console.log(animals[0].toUpperCase())
// console.log(animals[1].toUpperCase())
// console.log(animals[2].toUpperCase())
// console.log(animals[3].toUpperCase())

// Array의 item에 개별적으로 method 사용 가능하다
// animals.forEach(function (animal) {
//     console.log(animal.toUpperCase())
// })

// Array.map(callback): 새로운 Array를 return한다
// var result = animals.map(function (animal) {
//     console.log(animal);

//     return animal.toUpperCase()
// })

// console.log(result)

// var numbers = [3, 6, 9, 12];

// // Array.filter(callback): 조건에 맞는 item을 return한다. 새로운 array를 만든다
// var result = numbers.filter(function (number) {
//     if (number > 6) {
//         return number;
//     }
// })

// console.log(result)

// # JavaScript Operator(연산자)

// Arithmetic (수리연산자)
// Assignment (할당연산자)
// Comparison (비교연산자)
// Logical (논리연산자)

// Arithmetic
// +, -, *, /, **, %, ++, --

// console.log(3 + 4)

// console.log('3' + 4) // String
// console.log(3 + '4') // String
// console.log('3' + '4') // String

// console.log('3' - 4)
// console.log(3 - '4')
// console.log('3' - '4')

// console.log('3' * 4)
// console.log(3 * '4')
// console.log('3' * '4')

// console.log('3' / 4)
// console.log(3 / '4')
// console.log('3' / '4')

// console.log(3 + 'bunny') // String
// console.log(3 + true) // true: 1
// console.log(3 + false) // false: 0
// console.log(3 + undefined) // NaN: Not a number
// console.log(3 + null) // null: 0

// console.log(3 - 'bunny') // NaN: Not a number
// console.log(3 - true) // true: 1
// console.log(3 - false) // false: 0
// console.log(3 - undefined) // NaN: Not a number
// console.log(3 - null) // null: 0


// var x = 5;
// var z = x ** 2

// console.log(z)

// let x = 5;
// let z = Math.pow(x,2);

// console.log(z)

// 나머지
// var x = 25;
// var z = x % 5

// console.log(z)

// var num = 1

// // 증가
// // num++
// // console.log(num)

// num --;

// console.log(num)

// Assignment 
// =, +=, -=, *=, /=, %=, **=

// equal
// var cat = 'Kitty'

// console.log(cat)

// var num = 3

// // num = num + 4
// num += 4

// console.log(num)

// var num = 3;

// num -= 4

// console.log(num)

// Comparison 비교연산자
// ==, ===, !=, !==, >, <, >=, <=, ?

// ==: value가 일치할 때
// console.log(3 == 3) // true

// console.log(1 == true)
// console.log(0 == false)

// console.log(3 + null)
// console.log(0 == null)


// === value와 type이 모두 일치할 때
// console.log('3' == 3) // true (String, Number)
// console.log('3' === 3) // false (String, Number)

// console.log('true' == true) // false
// console.log('true' === true) // false

// console.log('false' == false) // false
// console.log('false' === false) // false

// console.log(undefined == null) // true
// console.log(undefined === null) // false (undefined, Object)

// var x = { username: 'cat' }
// var y = { username: 'cat' }

// // Object끼리는 비교할 수 없다
// console.log(x == y) // false
// console.log(x === y) // false

// var x = [1,2,3]
// var y = [1,2,3]

// // Array끼리 비교할 수 없다
// console.log(x == y) // false
// console.log(x === y) // false

// !=
// value가 다르다
// console.log('3' != 3) // false
// console.log('3' != 4) // true

// !==
// value 또는 type이 다르다
// console.log('3' !== 3) // type이 다르다 => true
// console.log('3' !== 4) // type, value가 다르다 => true

// console.log(3 > 4)
// console.log(3 < 4)
// console.log(3 >= 3)
// console.log(3 <= 3)

// ? ternary (삼항연산자)

// var age = 20
// // condition ? true : false
// var result = age > 18 ? '성인' : '청소년 또는 어린이';

// console.log(result)

// Logical (논리연산자)

// &&, ||, ! 

// && And
// console.log(3 == '3' && undefined == null) // true

// console.log(3 == '4' && undefined == null) // false

// console.log(3 == '4' && undefined === null) // false

// // || or
// console.log(3 == '3' || undefined == null) // true

// console.log(3 == '4' || undefined == null) // true

// console.log(3 == '4' || undefined === null) // false

// ! (not)

// console.log(3 > 4) // false

// console.log(!(3 > 4)) // true

// console.log(true) // true
// console.log(!true) // false

// console.log("")
// console.log("" == false) // true
// console.log("" === false) // false
// console.log(!"") // true

// # var (변수)

// 변수 선언 declare
// var cat;
// console.log(cat) // undefined


// var cat; // declare
// cat = 'Kitty' // define

// console.log(cat)


// var cat = 'Kitty';
// var cat = 'Garfield';

// console.log(cat)

// # Condition (조건)

// if/else, switch


// if (age > 18) {
//     console.log('성인')
// } else {
//     console.log('청소년 또는 어린이')
// }

// if (age > 18) {
//     console.log('성인')
// }

// if (age < 20) {
//     console.log('청소년 또는 어린이')
// }

// if (age >= 18) {
//     console.log('성인')
// }

// if (age < 18) {
//     console.log('청소년')
// }

// var age = 20

// if (age >= 18) {
//     console.log('성인')
// } else if (age >= 13) {
//     console.log('청소년')
// } else {
//     console.log('어린이')
// }

// if (age >= 18) {
//     console.log('성인')
// } else if (age >= 13) {
//     console.log('청소년')
// } else if (age < 13) {
//     console.log('어린이')
// }

// var person;
// var age = 15

// if (age >= 18) {
//     person = '성인'
// } else {
//     person = '청소년 또는 어린이'
// }

// console.log(person)

// switch condition

// var day;
// console.log(new Date().getDay()) // 0: 일요일

// switch (4) {
//     case 0:
//     day = '일요일';
//     break;
//     case 1:
//     day = '월요일';
//     break;
//     case 2:
//     day = '화요일';
//     break;
//     case 3:
//     day = '수요일';
//     break;
//     case 4:
//     day = '목요일';
//     break;
//     case 5:
//     day = '금요일';
//     break;
//     case 6:
//     day = '토요일';
// }

// console.log('오늘은 ' + day + '입니다')

// var txt;

// console.log(new Date().getDay()) // 0: 일요일

// switch (4) {
//     case 6:
//         txt = '오늘은 토요일입니다'
//         break;
//     case 0:
//         txt = '오늘은 일요일입니다'
//         break;
//     default:
//         txt = '주말을 기다리는 중입니다'
// }

// console.log(txt)

// var txt;

// switch (3) {
//     // default가 가장 뒤에 있을 필요는 없다
//     default: 
//         txt = '주말을 기다리는 중입니다'
//         break;
//     case 6:
//         txt = '오늘은 토요일입니다'
//         break;
//     case 0:
//         txt = '오늘은 일요일입니다'
// }

// console.log(txt)

// var txt;

// switch (3) {
//     case 4:
//     case 5:
//         txt = '주말을 기다리는 중입니다'
//         break;
//     case 0:
//     case 6:
//         txt = '주말입니다'
//         break;
//     default:
//         txt = '평일 또는 주말입니다'
// }

// console.log(txt)

// var num = "0"
// var txt;

// switch (num) { // type과 value 모두 일치해야 한다 (===)
//     case 0:
//         txt = 'OFF'
//         break;
//     case 1:
//         txt = 'ON'
//         break;
//     default:
//         txt = '기본값입니다'
// }

// console.log(txt)

// # loop (반복문)
// for, while


// for (var i=0; i<10; i++) {

//     console.log(i)
// }

// var animals = ['bunny', 'cat', 'duck', 'bird']

// // index => i
// // for (var i=0; i<animals.length; i++) {
// //     console.log(animals[i].toUpperCase())
// // }

// for (var animal of animals) {
//     console.log(animal.toUpperCase())
// }

// while

// var txt = '';

// var i = 0;

// while (i < 10) {
//     txt = txt + '숫자 ' + i;

//     // i를 1씩 증가
//     i++
// }

// console.log(txt)

// var txt = '';

// var animals = ['bunny', 'cat', 'duck', 'bird']

// for (var i=0; i<animals.length; i++) {
//     // txt += animals[i] + ' '
//     txt = txt + animals[i] + ' '
// }
// console.log(txt)

// var cat = { name: 'Kitty', age: 1, color: 'Brown' }

// var txt = '';

// for (var key in cat) {
//     console.log(key);
    
//     txt += cat[key] + ' ';
// }

// console.log(txt)


// # Function (함수)

// 함수선언

// 함수표현식 (function expression)
// 함수선언식 (function declaration)

// 함수선언식
// function f() { // function <함수이름> ()
//     console.log('hello')
// }

// // 함수표현식
// // 함수를 변수에 담는다
// var f = function() { // 익명함수: function ()
//     console.log('hello')
// }

// 함수 정의 (함수선언식, declaration)
// function f() {
//     console.log('hello')
// }

// f() // invoke (함수호출)


// f();

// function f() { // Hoisting (정의가 호출시점보다 올라간다)
//     console.log('hello')
// }


// (함수 선언식)()
// self-invoking (자기호출) 함수

// (function () {
//     console.log('hello')
// })();

// 함수 인자 (parameter)

// function add(a, b) { // function <함수이름>(params1, params2, ...)
//     // 반환
//     return a + b;
// }

// var r = add(3,4);

// console.log(r); // 출력


// function add() {
//     // 변수 정의
//     // 함수범위에 있는 변수
//     // local variable (지역변수)
//     var a = 3;
//     var b = 4;

//     return a + b
// }

// var r = add()

// console.log(r)

// // 함수 밖에서 함수의 변수에 접근
// console.log(a)
// console.log(b)


// var a = 3;
// var b = 4;

// function add(x, y) {
//     return x + y
// }

// var r = add(a, b)
// console.log(r)

// console.log(add(a, b))

// 4칙 연산 함수 만들어보기
// add, subtraction, division, multiplication

// function add(a, b) {
//     return a + b
// }

// function subtraction(a, b) {
//     return a - b
// }

// function division(a, b) {
//     return a / b
// }

// function multiplication(a, b) {
//     return a * b;
// }


// 전역변수 (Global variable)
// 어디에서든지 접근 가능
// var greeting = 'Good morning'

// function f() {
//     return greeting; // 전역변수에 접근 ok
// }

// var r = f()
// console.log(r)

// var greeting = 'Good morning'

// function f() {
//     var greeting = '좋은 아침'

//     return greeting; // 전역변수와 지역변수가 같은 경우 지역변수가 우선된다
// }

// var r = f()
// console.log(r)

// var greeting = 'Good morning' // 변수 선언, 변수 정의

// function f() {

//     greeting = '좋은 아침' // 변수 정의

//     return greeting; // 전역변수와 지역변수가 같은 경우 지역변수가 우선된다
// }

// var r = f()
// console.log(r)


// # Method (메서드)
// method는 Object에 소속되어있다
// sound는 cat의 method이다
// var cat = {
//     name: 'Kitty', // name: property(속성) 'Kitty': value(값)
//     age: 1, // age: property (속성) 1: value(값)
//     sound: function() { // sound: method(메서드) - value가 함수일 때 
//         return 'meow'
//     }
// }

// var r = cat.sound()
// console.log(r)
// console.log(cat.sound())

// var cat = {
//     name: 'Kitty',
//     age: 1,
//     greeting: function() {
//         return 'Hi, I am ' + this.name; // this: 메서드의 소유 객체 (cat)
//     }
// }

// var r = cat.greeting()
// console.log(r)

// var cat = {
//     name: 'Kitty',
//     age: 1,
//     sound: function() {
//         return 'meow'
//     },
//     greeting: function(date) {
//         return 'Good morning at ' + date;
//     }
// }

// var r = cat.greeting(new Date().toLocaleTimeString())
// console.log(r)

// # Callback
// 다른 함수의 인자가 되는 함수


// function first(callback) {
//     console.log('First')
//     callback() // callback()
// }

// function second() {
//     console.log('Second')
// }

// first(second) // first(second()) error

// function first(callback) {
//     console.log(1)
//     callback()
// }

// function second(callback) {
//     console.log(2)
//     callback()
// }

// function third() {
//     console.log(3)
// }

// // first(second) // first(second()) error
// first(function() { // first(second(third)), error
//     second(third)
// })

// function first(callback) {
//     console.log(1)
//     callback()
// }

// function second(callback) {
//     console.log(2)
//     callback()
// }

// function third(callback) {
//     console.log(3)
//     callback()
// }

// function fourth(callback) {
//     console.log(4)
//     callback()
// }

// function fifth() {
//     console.log(5)
// }

// first(function () {
//     second(function () {
//         third(function () {
//             fourth(fifth) // fourth(fifth)
//         })
//     })
// })

// # Asynchronous (비동기 함수) <=> Synchronous (동기 함수)
// 비동기: 빠른 것부터 처리한다
// 동기: 순서대로 실행한다


// Sync 동기적
// 일반적인 함수, 자바스크립트의 동작 방식
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// function first() {
//     console.log(1)
// }

// function second() {
//     console.log(2)
// }

// function third() {
//     console.log(3)
// }

// // 호출한 순서대로 실행된다
// first()
// second()
// third()


// 대표적인 비동기 함수
// setTimeout(callback, milliseconds)
// milliseconds 후에 callback 실행
// setTimeout(function () {
//     console.log('Good morning')
// }, 1000) // 1s = 1000ms

// function myFunction(callback, data) {
//     console.log(data)
//     callback()
// }

// myFunction(function() { // callback함수로 익명함수가 사용되었다
//     console.log('Good morning')
// }, 1000)

// function first(callback) {
//     console.log(1)
//     callback()
// }

// function second() {
//     console.log(2)
// }

// console.log(second) // 함수 정의가 출력된다

// first(second) // second: callback함수


// function first(callback) {
//     console.log(1)
//     callback()
// }

// first(function() { // callback함수로 익명함수 사용
//     console.log(2) // 함수 또는 메서드 실행
// })


// console.log(1)

// setTimeout(() => { // 비동기 함수 (가장 마지막에 실행된다)
//     console.log(2)
// }, 0)

// console.log(3)


// function f(callback, ms) {
//     callback()
// }

// console.log(1)

// f(function () { // f: 동기 함수
//     console.log(2)
// }, 1000)

// console.log(3)


// function f() { // setTimeout 함수를 활용해서 f를 비동기 함수로 만든다.
//     setTimeout(function () {
//         console.log(2)
//     }, 0)
// }

// console.log(1)
// f() // 비동기 함수
// console.log(3)


// setTimeout(function () {
//     console.log(1)
// }, 1000)

// setTimeout(function () {
//     console.log(2)
// }, 500)

// setTimeout(function () {
//     console.log(3)
// }, 0)

// setTimeout(function () {
//     console.log(1)

//     setTimeout(function () {
//         console.log(2)

//         setTimeout(function () {
//             console.log(3)
//         }, 0)

//     }, 500)

// }, 1000)


// console.log(1)

// // 메인 이미지
// // 용량이 커서 가져오는데 오래 걸린다
// setTimeout(function () {
//     console.log('이미지를 가져오기 완료')
//     console.log('이미지를 화면에 나타내는 중')
// }, 1000)

// console.log(3)
// console.log(4)
// console.log(5)


// console.log(1)

// // 이미지를 가져오는 함수
// setTimeout(function () {
//     console.log('이미지를 가져오기 완료')
//     // 이미지를 나타내는 함수
//     console.log('이미지를 화면에 나타내는 중')
// }, 1000)

// console.log(3)
// console.log(4)
// console.log(5)

// function fetchUser() {
//     setTimeout(function () {
//         return { username: 'bunny' }
//     }, 1000)
//     // return { username: 'bunny' }
// }

// var user = fetchUser()

// console.log(user)


// function fetchUser() {
//     setTimeout(function () {
//         var user = { username: 'bunny' }
//         console.log(user)
//     }, 0)
// }

// console.log(1)
// fetchUser()
// console.log(3)

// function first(callback) {
//     callback()
// }

// function second() {
//     console.log(2)
// }

// first(second) // second: callback함수 (다른 함수의 인자가 되는 함수)

// function first(callback) {
//     callback()
// }

// first(function () { // callback함수로 익명함수를 사용한다
//     console.log(2)
// })

// function first(callback) {
//     var num = 1;
//     callback(num) // callback으로 인자를 넘겨준다
// }

// function second(data) {
//     console.log(data)
// }

// first(function (d) { // first(second(d)) error
//     second(d)
// })

// first(second)


// function first(callback) {
//     var num = 1;
//     callback(num)
// }

// function second(data, callback) {
//     callback(data)
// }

// function third(data) {
//     console.log(data)
// }

// // first(function(n) {
// //     second(n, third)
// // })

// first(function(n) {
//     second(n, function(n) {
//         third(n)
//     })
// })

// function first(callback) {
//     setTimeout(function() {
//         console.log(1)
//         callback()
//     }, 500)
// }

// function second(callback) {
//     setTimeout(function() {
//         console.log(2)
//         callback()
//     }, 0)
// }

// function third() {
//     setTimeout(function() {
//         console.log(3)
//     }, 1000)
// }

// first(function () { // first(second(third))
//     second(third)
// })


// 자료를 가져오는 함수
// function fetchData() { // 비동기함수
//     setTimeout(function () {
//         return { username: 'bunny' }
//     }, 0)
// }

// // 자료를 보여주는 함수
// function displayData(data) {
//     console.log(data)
// }


// var user = fetchData();
// displayData(user)


// function fetchData(callback) { // 비동기함수
//     setTimeout(function () {
//         var user = { username: 'bunny' }
//         callback(user)
//     }, 0)
// }

// function displayData(data) {
//     console.log(data)
// }

// console.log(1)
// // 이미지를 가져와서 보여주는 작업은 동기적으로 작동해야 한다
// fetchData(displayData)
// console.log(3)
// console.log(4)


// # Class, Object constructor
// 객체를 생성하기 위한 템플릿
// JavaScript - Object constructor기반 언어
// 기타 언어 - Class기반 언어

// ES2015에 class 문법 추가

// 클래스 언어
// class className { // 클래스이름
//     // 생성자
//     constructor() { ... }
// }

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// var myCar = new Car("제네시스", 2014);

// console.log(myCar)

// console.log(myCar.name)
// console.log(myCar.year)


// // Car 클래스 선언
// class Car {
//     // 생성자 (메서드)
//     constructor(name, year) {
//         this.name = name; // this: Class의 인스턴스
//         this.year = year;
//     }
//     // 메서드
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// // Car 클래스의 instance
// var staria = new Car("스타리아", 2020);
// // Car 클래스의 instance
// var avante = new Car("아반떼", 2009);
// // Car 클래스의 instance
// var casper = new Car("캐스퍼", 2021);

// console.log(staria.age())
// console.log(avante.age())
// console.log(casper.age())


// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }

// var date = new Date();
// var year = date.getFullYear(); // 2022 (Number)

// // Car클래스의 인스턴스 생성
// var staria = new Car("스타리아", 2020)

// var r = staria.age(year)
// console.log(r)

// # Class inheritance (상속)

// class Brand {
//     constructor(data1) {
//         this.brand = data1;
//     }
//     // Car클래스의 메서드
//     showBrand() {
//         return "내 자동차는 브랜드는 " + this.brand + '입니다.';
//     }
// }

// // class Model은 Car클래스를 상속했다
// class Model extends Brand { // extends 상속받은 클래스 이름
//     constructor(data1, data2) {
//         // super(): 상속받은 클래스는 super() constructor를 호출해야 한다.
//         super(data1); // 부모 클래스의 생성자로 인자를 넘긴다.
//         this.model = data2; // Model클래스의 인스턴스
//     }
//     // Model 클래스의 method
//     showModel() {
//         return '내 자동차 모델명은 ' + this.model + '입니다.';
//     }
//     // Model 클래스의 method
//     showBrandModel() {
//         return this.showBrand() + ' ' + this.showModel()
//     }
// }

// var staria = new Model("현대", "스타리아");
// console.log(staria)

// console.log(staria.showBrand())
// console.log(staria.showModel())
// console.log(staria.showBrandModel())

// Static method

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     // static method
//     static sound() {
//         return '부릉'
//     }
// }

// var staria = new Car("스타리아");

// static method는 인스턴스에서 호출할 수 없다
// console.log(staria.sound()) // error
// 클래스에서 호출할 수 있다
// console.log(Car.sound());

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static sound(data) {
//         return data;
//     }
// }

// var casper = new Car("캐스퍼");

// casper.sound('부릉')
// Car.sound('부릉')

// console.log(Car.sound('부릉'))


// Rectangle클래스를 호출하고 있다
// var p = new Rectangle();

// // Hoisting이 적용되지 않는다
// // Hoisting: 초기화화기 전에 호출할 수 없다.
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }


// // Getter
// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // getter
//     get area() {
//         return this.calcArea();
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// // 문법적으로 더 간편하다
// // calcArea()를 비공개로 할 수 있다
// console.log(square.area) // getter 호출

// console.log(square.calcArea())

// class Rectangle {
//     #height; // private 필드(속성) 선언
//     #width;
//     constructor(height, width) {
//         this.#height = height;
//         this.#width = width;
//     }
//     getArea() {
//         return this.#width * this.#height;
//     }
// }

// var square = new Rectangle(10, 10);

// console.log(square)
// // console.log(square.#width) // private필드는 클래스 안에서만 접근할 수 있다

// console.log(square.getArea())

// # Object constructor
// 자바스크립트에서의 클래스

// Object constructor는 앞글자가 대문자여야 한다.
// JavaScript에서는 class: Syntax sugar 문법적인 조미료
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;

//     this.greeting = function () {
//         return "hello I'm " + this.firstName;
//     }
// }

// // Person.prototype.greeting = function () {
// //     return "hello I'm " + this.firstName;
// // }

// // Person의 인스턴스 생성
// var person = new Person("Doe", "John", 42, "blue");

// console.log(person);
// console.log(person.greeting());

// // String 
// console.log(String)

// // String클래스의 인스턴스 생성
// // var user = new String("bunny");
// var user = 'bunny' // literal 방식

// console.log(user)
// console.log(user.toUpperCase()) // toUppserCase() // 일반 메소드

// console.log(String.prototype);

// var cat = {
//     name: 'Kitty',
//     age: 1,
//     color: 'Brown'
// }

// Object의 static method 'keys'
// var r = Object.keys(cat);

// console.log(Object.prototype);

// console.log(r)

// Object
// Strign

// 내장 클래스(Object constructor, 객체 생성자)
// console.log(Object)

// // Object클래스를 상속받은 클래스
// console.log(String)
// console.log(Number)
// console.log(Boolean)
// console.log(Date)
// console.log(Array)

// // Date클래스의 instance 생성
// console.log(new Date())
// console.log(new Date().getFullYear())


// var cat = 'Kitty'
// var cat = new String("Kitty")
// console.log(cat instanceof String)

// var cat = 'Kitty'
// // cat의 프로토타입 객체
// // 프로토타입객체로부터 상속받는다
// console.log(cat.__proto__)


// # Error handling, try/catch

// 자바스크립트의 에러 종류 (Object)
// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// Error object properties (속성)
// 1 name
// 2 message
// 3 stack(optional)


// console.log(cat)
// Uncaught ReferenceError: cat is not defined at ...
// Uncaught: 잡히지 않는 에러
// ReferenceError: error의 name
// cat is not defined: error의 message

// var error = new Error("에러 발생!")
// console.log(error)

// var error = new SyntaxError("문법 오류!")
// console.log(error)

// throw error; // 에러를 발생시킨다

// try / catch


// try { // 코드를 작성한다
//     console.log(x)


//     // catch block에서 에러를 처리한다.
// } catch (error) { // Uncaught 
//     console.error(error);
// }


// Custom Error와 try/catch

// function fetchUser() {
//     return null;
// }

// class UserException extends Error {
//     constructor(message) {
//         super(message) // super(): 상속받은 클래스는 super()를 호출해야 한다.
//         this.name = 'UserException';
//     }
// }

// try {

//     var user = fetchUser();

//     if (!user) {
//         throw new UserException("일치하는 회원이 존재하지 않습니다")
//     }

//     // throw 밑에 코드는 실행되지 않는다;
//     console.log(user);

// } catch (error) { // error: new UserException("...")
//     console.error(error)
// }


// try {


//     var age = 15;

//     if (age >= 18) {
//         console.log('이 콘텐츠를 이용할 수 있습니다')
//     } else {
//         throw "청소년 및 어린이는 이용할 수 없습니다";
//     }

// } catch (error) {  // error: "청소년.." (string)
//     // console.log(error)
//     console.error(error)
// }

// try {

//     // console.log(x)
    
//     // parse-time error
//     // 자바스크립트 엔진이 코드를 읽다가 발생한 에러.
//     // try/catch에서 처리되지 않는다.
//     // console.log(x)

//     // 런타임 에러 (실행가능한 코드에서 발생한 에러)
//     // try/catch 에서 처리 가능
//     // console.log(x)
//     console.log(x.method1());

// } catch (error) {
//     console.error(error)
// }

// try/catch async function error handling.

// ES6 
// 2015년에 추가된 문법
// 변수: let, const
// 함수: Arrow function 
// For/of
// Class (자바스크립트는 prototype기반 언어이다)
// Promise (비동기 작업)
// Destructing/spread operator (Object, Array의 표시하는 방법)
// Ternary (삼항연산자)
// Array.from(), Array.keys(), Array.find(),
// Object.entries()
// ...

// # 변수: var, let, const
// 1. 기본적인 차이점
// 2. 변수의 범위에서의 차이점


// var cat; // declare (선언)
// console.log(cat) // undefined

// var cat = "Kitty"; // declare, assignment(할당) = define
// =: 할당연산자
// cat = "Kitty": literal 방식 (value만 할당)

// var cat = new String("Kitty") // String 클래스의 instance 생성

// // instance의 커스텀 method
// // instance를 만들고 method를 추가할 수 있다
// cat.sound = function() {
//     return '야옹'
// }
// // instance를 만들고 property를 추가할 수 있다
// cat.home = null;

// console.log(cat)

// console.log(typeof cat) // object
// console.log(cat instanceof String) // true

// console.log(cat.toUpperCase()) // String클래스의 toUpperCase() 메소드를 [ 상속 ] 한다


// var cat = "Kitty"; // declare, define
// console.log(cat)


// var cat = "Kitty"
// var cat = "Alfredo" // redeclare, define

// console.log(cat)


// var cat = "Kitty" // declare
// cat = "Afredo"; // define

// console.log(cat)


// let cat; // declare
// console.log(cat) // undefined


// let cat; // declare

// cat = "Kitty" // define

// console.log(cat);


// let cat = "Kitty"; // declare
// let cat = "Alfredo"; // redeclare (재선언 안됨)

// console.log(cat);


// const cat; // declare, define (intializer: 초기화를 반드시 해야함)
// 초기화: 선언과 값을 할당하는 것

// console.log(cat);


// const cat = "Kitty" // const 초기화
// cat = "Alfredo" // const에는 할당 불가

// console.log(cat)


// const cat = "Kitty" // declare
// const cat = "Alfredo" // 재선언 불가


// Q. Uncaught SyntaxError가 발생한 이유와 에러를 catch하는 방법을 코딩해보세요.
// const cat;

// console.log(cat);


// try {
//     // parse-time 에러
//     // javascript 엔진이 코드를 읽다가 발생한 에러
//     const cat;
//     console.log(cat);

// } catch (error) {
//     // catch block에서 error를 처리한다
//     console.error(error)
// }

// 변수의 범위 (scope)
// var, let, const
// global scope (전역 범위)
// local scope (지역 범위)
// block scope (블록 범위)


// let cat = "Kitty" // Global (전역범위)
// // 어디에서도 접근할 수 있다
// // 함수 내부, block 등

// function f() {
//     console.log(cat)
// }

// f()


// function f() {
//     // 함수의 내부는 local scope(지역 범위)
//     let cat = "Kitty" // Local Variable (지역 변수)

//     console.log(cat)
// }

// console.log(cat) // error (not defined, 정의되지 않음)
// 함수의 외부에서 cat(지역변수)에 접근할 수 없음

// f()


// let cat = "Kitty" // 전역변수

// function f() {
//     cat = "Alfredo" // 지역변수

//     console.log(cat)
// }

// f()


// let cat = "Kitty"

// function f() {
//     let cat = "Alfredo";
//     // 변수의 비교는 지역범위 안에서만 한다
//     // let cat = "Garfield"; // 재선언 불가
//     console.log(cat)
// }

// f()

// let cat = "Kitty"
// let cat = "Alfredo" // 재선언 불가


// const cat = "Kitty" // Global (전역 범위)

// function f() {
//     console.log(cat)
// }

// f()

// const cat = "Kitty"

// function f() {
//     const cat = "Alfredo";

//     console.log(cat)
// }

// f()

// Block (블록 범위)
// { } (brace, 중괄호)

// function f() {
//     // 지역변수
//     // 지역변수는 지역범위(함수 범위)를 갖는다
//     const cat = "Kitty"
// }

// console.log(cat) // 함수 외부에서 지역변수에 접근 불가


// { // block 지정
//     var cat = "Kitty"; // var은 블록 외부에서 접근 가능
// }

// {
//     let cat = "Kitty"; // let은 블록 내부에서만 사용 가능
// }

// {
//     const cat = "Kitty" // const는 블록 내부에서만 접근 가능
// }

// console.log(cat)

// {
//     // 블록 안에서만 변수를 비교한다
//     const cat = "Kitty"
//     console.log(cat)
// }

// const cat = "Alfredo"
// console.log(cat)


// function f() {
//     // local 범위(함수 범위)
// }

// if (true) {
//     // block 범위
//     let greeting = "hello";
// }

// console.log(greeting)

// for (i=0; i<10; i++) {
//     // block (블록범위)
//     let total = 55; 
// }

// console.log(total)

// "use strict"; // 엄격 모드

// cat = "Kitty"
// console.log(cat)



// let total = 0 // total: 전역변수

// for (let i=0; i<10; i++) {
//     total += i // 값 증가 (할당)
//     // total = total + i
// }

// console.log(total);

// let person; // global 전역 변수

// if (true) {
//     person = '성인' // 값을 할당
// }

// console.log(person)

// 함수를 정의하는 방법

// // 함수선언식
// function f() {
//     return "."
// }

// // 함수표현식 
// // 변수에 익명 함수를 할당한다
// const f = function() {
//     return "."
// }

// f();
// // declaration은 hoisting(게양)가능
// // 함수의 호출시점보다 함수의 정의가 더 위로 올라간다
// function f() {
//     console.log('.')
// }

// expression은 hoisting이 되지 않는다
// var f = function () {
//     console.log('아침엔 맥모닝')
// }

// f();

// f();


// var f = () => { // () => {}
//     console.log('아침 꼭 드세요')
// }

// f();

// var f = () => {
//     return "좋은 아침"
// }

// console.log(f())


// var f = () => "좋은 아침";
// // {} (중괄호)를 생략하면 화살표 뒤의 값이 return 된다

// console.log(f());

// var f = () => "좋은 아침"

// Arrow func에 인자가 있을 때
// var f = (data) => "아침엔 " + data;

// let r = f("맥모닝");

// console.log(r)


// var f = (a, b) => `아침엔 ${a}, ${b}`;

// // console.log(f) // 함수의 정의

// let r = f("맥모닝", "우유");

// console.log(r);

// var f = data => `아침엔 ${data}` // 인자가 하나일 때 () 생략 가능

// let r = f("딸기 주스")

// console.log(r)


// # Destructing, Spread operator
// Destructing: 구조분해할당
// Spread operator: ...

// const animals = [
//     "고양이", "토끼", "오리"
// ]

// console.log(animals)

// let cat = animals[0]; // array[index]
// let bunny = animals[1];
// let duck = animals[2];

// console.log(cat)
// console.log(bunny)
// console.log(duck)

// const animals = [
//     "고양이", "토끼", "오리"
// ]

// const [cat, bunny, duck] = animals

// console.log(cat)
// console.log(bunny)
// console.log(duck)


// const animals = ["고양이", "토끼", "오리"]

// const [cat, ,duck] = animals

// console.log(cat)
// console.log(duck)

// const [ ,bunny, ] = animals

// console.log(bunny)

/// ... : Spread operator
// const [cat, ...friends] = animals

// console.log(cat)
// console.log(friends)

// const [cat, ...rest] = animals

// console.log(rest)

// const animals = ["고양이", "토끼", "오리"]

// const moreAnimals = ["새", "불독", "쿼카"]

// // .concat()
// const r = [...animals, ...moreAnimals]

// console.log(r)

// const animals = ["고양이", "토끼", "오리"]
// // const newAnimal = "쿼카" // newAnimal
// const newAnimal = ["쿼카"] // ...newAnimal

// const r = [...animals, ...newAnimal] 

// console.log(r)

// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// console.log(add(4, 7))

// Q. caculate 함수를 이용해서 add, subtract, multiply, divide변수(결과 값)를 선언하고
// 값을 대입해서 출력해보세요
// destructing을 사용 (Spread Operator는 없음)

// function calculate(a, b) {
//     const cal1 = a + b;
//     const cal2 = a - b;
//     const cal3 = a * b;
//     const cal4 = a / b;

//     return [cal1, cal2, cal3, cal4];
// }

// console.log(calculate(4, 7))

// const [add, subtract, multiply, divide] = calculate(4, 7);

// console.log(add)
// console.log(multiply)

// Object
// Destructing, Spread Operator

// var cat = {
//     name: "Kitty",
//     age: 1,
//     home: null,
//     sound: function () {
//         return "meow";
//     }
// }

// function f(data) {
//     // data 부분이 반복된다
//     let r = `고양이의 이름은 ${data.name}이고 나이는 ${data.age}살 입니다.`
//     console.log(r)
// }

// function f({ name, age }) {
//     // Object destructing
//     let r = `고양이의 이름은 ${name}이고 나이는 ${age}살 입니다.`;
//     console.log(r)
// }

// f(cat)

// var cat = {
//     name: "Kitty",
//     age: 1,
//     sound: function () {
//         return "meow";
//     }
// }

// // var r = { ...cat, color: "Brown" } // 새로운 key: value 쌍이 추가 된다

// // var r = { ...cat, color: "Brown", home: null }
// var r = { ...cat, ...{ color: "Brown", home: null } } // Spread operator

// console.log(r)


// Q. 세개의 array를 spread operator를 사용해서 합쳐보세요
let num1 = [1,2,3]
let num2 = [4,5,6]
let num3 = [7,8,9]

// Array: ...Array
console.log([...num1, ...num2, ...num3])

// Object: ...Object
































