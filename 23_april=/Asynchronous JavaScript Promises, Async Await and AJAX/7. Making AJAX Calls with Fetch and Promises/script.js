// Making AJAX Call with Fetch and Promise

function getAPI() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/') // response
    // with fetch, it actually return a promise without us having to write a promise ourselves. So we're just consuming it here
    .then(abc => {
        console.log(abc); // result is ReadableStream on body
        return abc.json(); // so we parsing to JSON
        // json string, dibaca sama semua bahasa
    }).then(function(data) {
        console.log(data);
    })
    .catch(error => console.log(error));
    // ReadableStream means that we have to first process this response here with JSON so that we can then get the actual result
}

getAPI()

// .then() baca response dari hasil fetch si link api kawal corona