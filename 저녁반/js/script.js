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
var car = {
    // key : value
    name: '제네시스',
    year: 2022,
    color: '검정',
    sound: function () { // value가 함수인 것을 Method (메서드)라고 한다
        return '부웅'
    }
}
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
for (var i=0; i<cars.length; i++) { // i = index
    // console.log(
    //     "자동차 이름: " + cars[i].name + ", 디자인: " + cars[i].design + "점"
    // )
    console.log(`자동차 이름: ${cars[i].name}, 디자인: ${cars[i].design}점`)
}

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


















