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


function fetchData(callback) { // 비동기함수
    setTimeout(function () {
        var user = { username: 'bunny' }
        callback(user)
    }, 0)
}

function displayData(data) {
    console.log(data)
}

console.log(1)
// 이미지를 가져와서 보여주는 작업은 동기적으로 작동해야 한다
fetchData(displayData)
console.log(3)
console.log(4)





