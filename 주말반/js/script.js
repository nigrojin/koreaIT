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




