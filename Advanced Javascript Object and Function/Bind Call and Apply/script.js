/*****************************
* Bind, Call, and Apply
*/

var john = {
    name    : 'John',
    age     : 26,
    job     : 'teacher',
    presentation: function(style, timeOfDay)
    {
        if(style === 'formal')
        {
            console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m ' + this.name
            + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if(style === 'friendly')
        {
            console.log('Hey! What\'s up ? I\'m ' + this.name
            + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '
            + timeOfDay + '.');
        }
    }  
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
} // let's say we want to use a presentation method on emily

john.presentation.call(emily, 'friendly', 'afternoon'); // this called a method borrowing
// because, we use it on emily object, by borrowing on john object, its different with .create because we're not create
// anything inside of emily object

// john.presentation.apply(emily, ['formal', 'afternoon']);
// this similar to call method, but with apply it accept an array as an input
// But in this case, we can't use it for presentation method (cause is not an array)

// Also bind method, but instead of direct and pointing the function. Bind method is copying the function
// So you can store it somewhere

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal', 'morning');
emilyFormal(); // it's up to you to preset or not the timeOfDay but the reason is to use it in another day

// EXAMPLE
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn)
{
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el)
{
    return 2020 - el;
}

function isFullAge(limit, el)
{
    return el >= limit;
}
var ages        =   arrayCalc(years, calculateAge);
var fullJapan   =   arrayCalc(ages, isFullAge.bind(this,20));
// no need to declare an (el) it's automatically become an input of each function
console.log(ages);
console.log(fullJapan);