// IIFE (immediately invoked function expressions)

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game(); // call function

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
// ()()
// tabung pertama itu fungsinya
// tabung kedua parameter fungsi itu

(function(goodluck) {
    var score = Math.random() * 10;
    console.log(goodluck);
    console.log(score >= goodluck);
})(5);

// first Class
// Function is an instance of object
// store function in variable
// first class passing a function as argument
var years = [1990, 1997, 1991, 200, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var isFullAges = arrayCalc(ages, isFullAge);

console.log(years);
console.log(fullAges);

// First class return a function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what a good UX is ?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach ?');
        }
    } else {
        return function(name) {
            console.log(name + ', hello what are you doing now ?');
        }
    }
}

var teacherQuestion = interview('teacher');
teacherQuestion('jhon');
//cara pertama define parameter dari return function

var designerQuestion = interviewQuestion('teacher')('elton');
// cara kedua difine parameter dari return function

//bind call and apply

var agung = {
    name: 'lukman',
    age: 22,
    job: 'teacher',
    presentation: function(style, timeOfday) {
        if (style === 'formal') {
            console.log('good' + timeOfday + 'ladies and gentleman I\'m' + this.name);
        }
    }
}