// /*****************************
// * Immediately Invoked Function Expressions (IIFE)
// */

// function game()
// {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game(); // call function

// (function(){
//         var score = Math.random() * 10;
//         console.log(score >= 5);
//     })();
// // if you don't invoke immediately this with () and () in the end to placing parameter;
// // You need to attach this in the variable
// // basically this like you save the function on () -> then you call it ();

// (function (goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

(function dataDiri() {
    var biodata = {
        firstName: 'lukman',
        lastName: 'nulhakim',
        alamat: 'loss angeles, egnland',
        jenisKelamin: 'cowoxx',
        Hoby: 'ngeliatin cewe smock'
    }
    console.log(biodata);
})();