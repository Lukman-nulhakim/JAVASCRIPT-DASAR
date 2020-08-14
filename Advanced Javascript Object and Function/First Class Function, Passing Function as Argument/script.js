/*****************************
* First Class function: Passing Function as Argument
*/

/* 
    ~ First Class Functions ~
    A function is an instance of the Object type;
    A function behaves like any other object;
    We can store functions in a variable;
    We can pass a function as an argument to another function;
    We can return a function from a function;
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) // this will be as first class function
{
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i])); // this is function on calculateAge()
        // and isFullAge will operate
    }
    return arrRes;
}

function calculateAge(el)
{
    return 2019 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

function maxHeartRate(el)
{
    if(el >= 18 && el<= 81)
    {
        return Math.round(206.9 - (0.67 * el));
    }
    else
    {
        return -1;
    }
}

var ages        = arrayCalc(years, calculateAge);
var fullAges    = arrayCalc(ages, isFullAge);
var rates       = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);