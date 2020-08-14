/*****************************
* First Class function: Function returning Functions
*/

/* 
    ~ First Class Functions ~
    A function is an instance of the Object type;
    A function behaves like any other object;
    We can store functions in a variable;
    We can pass a function as an argument to another function;
    We can return a function from a function;
*/

function interviewQuestion(job)
{
    if (job === 'designer')
    {
        return function(name)
        {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if(job === 'teacher')
    {
        return function(name)
        {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('Hello ' + name + ', What do you do ?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Rakka');

interviewQuestion('teacher')('Mark');
// it also can do as same as your declare variable, but in an simpler way
