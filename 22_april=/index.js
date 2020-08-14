// // sperad operator

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 20, 23, 24);
// console.log(sum1);

// // ES5
// var ages = [18, 20, 23, 24];
// var sum2 = addFourAges.apply(null, ages);
// //var sum2 = object.addFourAges.apply(this.properties, ages);
// //apply, bind, call format

// //ES6
// const sum3 = addFourAges(...ages); // ... sama aja menjabarkan nilai dari array dari dalamnya dipecah jadi
// // (a,b,c,d)
// console.log(sum3);

// const familyBahagai = ['jane', 'jone', 'jine', 'june'];
// const familyKurangBahagai = ['mary', 'bob', 'lary'];

// const bigFamily = [...familyBahagai, 'parkSaeRoeYi', ...familyKurangBahagai];
// console.log(bigFamily);

// // another example
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box'); // 3 div
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'pink'); // foreach using ES6
//------------------------------------------------------------

// Rest Parameters

// ES5
// function isFullAge5() {
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(params) {
//         console.log((2020 - params) >= 18);
//     });
// }

// // isFullAge5(2004, 1999, 1997);

// //ES6
// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2020 - cur) >= 18));
// }

// // isFullAge6(1995,2003,2000);

// //ES5
// function isfullAge(limit) {
//     //console.log(argument);
//     var argsArr = Array.prototype.slice.call(argument, 1);
//     argsArr.forEach(function(params) {
//         console.log((2020 - params) >= limit);
//     });
// }

// // isFullAge5(20, 1997, 2002, 2008);

// //ES6
// function isFullAge6(limit, ...years) {
//     console.log(years);
//     years.forEach(cur => console.log((2020 - cur) >= limit));
// }

// isFullAge6(18, 2, 1995, 2003, 2000);
// // Rest parameters, harus dipakai bersamaan dengan spread operator

// Default parameters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     lasName === undefined ? lastName = 'Smith' : lastName = lastName; //ternary
//     nationality === undefined ? nationality = 'indonesia' : nationality = nationality
//     // if(lastName === undefined){
//     //      lastName = 'smith;
//     // } else {
//     //      lastName = 'lastName';
//     // }
//     this.firstName = firstName;
//     this.lasName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var jon = new SmithPerson('jon', 1997);
// var emily = new SmithPerson('emily', 1998, 'diaz', 'spanish');

// //ES6
// function PhilPerson(firstName, yearOfBirth,lastName )

//------------------------------------------------------------
//MAPS

// GET, SET, DELETE, CLEAR, HAS, ENTRIES

// const question = new Map();

// question.set('question', 'what is the latest version of EcmaScript ?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES10');
// //question.set(5, 'error');
// question.set('correct', 4);
// question.set(true, 'correct answer ;D');
// question.set(false, 'wrong, please try again');

// console.log(question.get('question'));
// console.log(question.size);


// for (let [key, value] of question.entries()) {
//     if (typeof (key) === 'number') {
//         console.log('answer ${key} : ${value}');
//     }
// }

// // question.entries() mewakili nilai dari key dan juga valuenya
// // question.entries() = [1, ES5]

// const ans = parseInt(prompt('write the correct answer !'));
// console.log();

//--------------------------------------------------
//Classes

//ES5
// var person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// person5.prototype.calculateAge = function() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     } // masukin fungsi ke prototype person5

// var jon5 = new person5('smith', 1997, 'teacher');

// //ES6
// class person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
//     static greeting() {
//         console.log('hey there');
//     }
// }

// const jon6 = new person6('Phil', 1996, 'Designer');
// console.log(jon6.calculateAge());
// //--------------------------------------------------
// // class with subclass

// //ES5
// var person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//         person5.call(this, name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }
//     // dengan call, kita pinjam
//     // si object person5 masukin nilainya kesini (athlete object)

// Athlete5.prototype = object.create(person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

// // johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// //ES6
// class person6 {
//     constructor(name, yearOfBirth, job) {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals
//     }
// }
//--------------------------------------------------