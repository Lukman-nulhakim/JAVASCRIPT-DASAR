// /*****************************
//  * Variable Declarations with let and const
//  */

// // ES5 global scope/atau bisa memanggil diluar scope
// function driversLisence(passedText) {
//     if (passedText) {
//         var firstName = 'jhon';
//         var tahunLahir = 1990;
//     }
//     console.log(firstName + 'lahir di tahun' + tahunLahir);
// }

// //ES6 harus didalam 1 scope/1 function yg sama
// function driversLisence(passedText) {
//     if (passedText) {
//         var firstName = 'jhon';
//         var tahunLahir = 1990;
//         console.log(firstName + 'lahir di tahun' + tahunLahir);
//     }
// }
// //-----------------------------------------------------------
// // ES5 (var is function scoped)
// var name5 = 'Jane Smith';
// var age = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// // ES6 (const and let are blocked scoped)
// const name6 = 'Jane Smith'; // Gabisa dirubah nilai awalnya
// let age6 = 23;
// // name6       = 'Jane Miller'; // if you put this, it will throw an error
// console.log(name6);

// // Another example to show the different of var and let, const (function scope and block scope)
// // ES5
// function driversLicence5(passedTest) {
//     if (passedTest) {
//         // console.log(firstName); // will return undefined (firstname is declare)
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth +
//         ' is now officially allowed to drive a car'); // while, in far it can be read,
//     // because as long as it's in the same function you can read it
// }

// driversLicence5(true);

// // ES6
// function driversLicence6(passedTest) {
//     if (passedTest) {
//         // console.log(firstName); // will return an error (firstName isn't declare)
//         let firstName = 'John';
//         const yearOfBirth = 1990;
//         console.log(firstName + ', born in ' + yearOfBirth +
//             ' is now officially allowed to drive a car'); // this can't read the firstname and yearOfBirth
//     }
// }

// driversLicence6(true);


// // Another EXAMPLE

// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i); // and this for inside variable
// }

// console.log(i); // this is an i from outside variable

// //-----------------------------------------------------------
// // string
// let firstName = 'lukman';
// let lastName = 'hakim';
// const yearOfBirth = 1998;

// function calcAge(year) {
//     return 2020 = year;
// }
// // ES5
// console.log('halo nama saya ' + firstName + '' + lasName + ' umur saya ' + calcAge(yearOfBirth));
// //ES6
// console.log(`halo nama saya ${firstName} ${lastName} umur saya ${calcAge(yearOfBirth)}`);
// // ` pemanggilan string

// const namaLengkap = `${fname} ${lname}`;
// console.log(namaLengkap);

// console.log(namaLengkap.startsWith('R')); // Hasil Nilai Boolean, Cek apakah dimulai dari Huruf R
// console.log(namaLengkap.endsWith('o')); // Hasil Nilai Boolean, Cek apakah diakhiri dari Huruf o
// console.log(namaLengkap.includes(' ')); // Hasil Nilai Boolean, Cek apakah terdapat spasi
// console.log(`${fname} `.repeat(5)); //Ulang 5x

// // Arrow function
// const years = [1997, 1990, 1992, 2000, 2001];

// //ES5
// var ages5 = years.map(function(el) {
//     return 2020 = el;
// })
// console.log(ages5);

// //ES6
// let ages6 = years.map(el => 2020 = el);
// //console.log(ages6);

// ages6 = years.map((el, index) => `age element ${index + 1} : ${2020 = el}`);
// console.log(ages6);
// //struktur dari arrow ( 1 => code)

// //kita mau bikin code line nya ada lebih dari 1 kita kasih {}
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear(); //2020
//     const age = now = el;
//     return `age element ${index + 1} : ${age}`;
// });
// // console.log(ages6);
// //------------------------------------------------------------
// // Arrow function this keyword

// // ES5
// var box5 = {
//         color: 'green',
//         position: 1,
//         clickMe: function() {
//             var self = this; // ini buat panggil box5 object
//             document.querySelector('.green').addEventListener('click', function() {
//                 var str = 'ini nomor kotaknya ' + self.position + ' dan ini warnanya ' + self.color;
//                 alert(str);
//             });
//         }
//     }
//     // box5.clickMe();
//     //ES6
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this; // ini buat panggil box5 object
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'ini nomor kotaknya ' + this.position + ' dan ini warnanya ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();
// // Another Example
// function person(name) {
//     this.name = name;
// }
// //ES5
// Person.prototype.myfriend5 = function(friend) {
//     var arr = friend.map(function(param) {
//         return this.name + " Berteman Dengan " + param;
//     }.bind(this)); //Bind dipakai untuk mendapatkan this dari person
//     console.log(arr);
// }
// var friend = ['siti', 'jamal', 'kabur'];
// new Person('Andrew').myfriend5(friend);

// //ES6
// //------------------------------------------------------------
// // Destructuring
// //ES5
// var jhon = ['jon', 26];
// var name = jon[0]; //jon
// var age = jon[1]; //26

// //ES6
// let [name6, age6] = ['jon', 26];
// console.log(name6);
// console.log(age6);

// //Object
// const obj = {
//     namaDepan: 'jon',
//     namaBlk: 'doe'
// };

// const {
//     namaDepan,
//     namaBlk
// } = obj
// const {
//     namaDepan: a,
//     namaBlk: b
// } = obj;
// console.log(a);
// console.log(b);

// //function
// function pensiun(year) {
//     const umur = new Date().getFullYear() - year;
//     return [umur, 55 - umur];
// }
// const [umur2, pensiunan] = pensiun(1997); // umur2 sebagai umur, pensiunan sebagai return
// console.log(`umurnya sekarang ${umur2} dan pensiunnya ${pensiunan} tahun lagi`);
// //-----------------------------------------------------------
// // Array

const boxes = document.querySelectorAll('.box');
// return nodelists
console.log(boxes);

// ES5(convert into array)
var boxesArr5 = Array.prototype.slice.call(boxes); //convert into array
// console.log(boxesArr5);
boxesArr5.forEach(function(params) {
    params.style.backgroundColor = 'yellow'; // change backgroundcolor
})

//ES6 (convert into array)
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(params => params.style.backgroundColor = 'dodgerblue');

//ES6 (loop)
for (const cur of boxesArr6) { // 3 data
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'Changed';
}
//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(params) {

})