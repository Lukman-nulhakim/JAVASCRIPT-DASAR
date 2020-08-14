const second = () => {
    setTimeout(() => {
        console.log('Async Hey There');
    }); // 2000 milisecond
}

const first = () => {
    console.log('Hey There'); // dijalanin 1
    second(); // dijalanin kedua
    console.log('The End');
}

first();

// First Example Asynchronous
