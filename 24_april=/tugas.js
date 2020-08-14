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

const promise1 = new Promise(function(resolve, reject) {
    reject('Selamat menjalankan ibadah puasa sahabat super !');
});

promise1.then(function(value) {
    console.log(value);
}).catch(error => {
    console.log('error');
});