/*****************************
* Closure
*/

// Using example to write a small function that returns a function
// which calculates how many years we have until retirement

function retirement(retirementAge)
{
    var a = ' years left until retirement.';
    return function(yearOfBirth)
    {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// var retirementUS = retirement(66);
// retirementUS(1990); // this gonna fill the yearOfBirth as a parameter inside function retirement

// retirement(55)(1990); // or you could simply doing this, is going the same as above you

/* 
    > What actually happen is somehow the function of yearOfBirth can actually get the value of
    retirementAge and a variable that outer of the function
    > And also you can going to give the value of yearOfBirth by declaring inside of function retirement
    > This called as closure
    // These are the explanation
    > An inner function has always access to the variables and parameters of its outer function
    , even after the outer function has returned.
*/
var retirementUS        =   retirement(66);
var retirementGermany   =   retirement(65);
var retirementIceland   =   retirement(67);
retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// Challenge, convert the function in the previous lecture

function interviewQuestion(job)
{
    return function(name)
    {
        if(job === 'designer')
        {
            console.log(name + ', can you please explain what UX design is ?');
        }
        else if(job === 'teacher')
        {
            console.log('What subject do you teach, ' + name + ' ?');
        }
        else
        {
            console.log('Hello ' + name + ' what do you do ?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Blake');

// The different is, the usable of the return that make more flex to use it.
// And more cleaner