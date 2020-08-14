// Asynchronous javascript with callbacks

// callback fungsi - formise adalah object promise ,then()
// catch buat nangkep error, .catch(error =>{
// console.log('error');
// })


// contoh ngeGET API corona white asynch await
// async function getApi() {
//     try {
//         const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia');
//         const data = await result.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getApi();

// GET API white promise
function getApi() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia')
        .then(abc => {
            console.log(abc);
            return abc.json();
        }).then(function(data) {
            console.log(data);
        })
        .catch(error => console.log(error));
}
getApi()