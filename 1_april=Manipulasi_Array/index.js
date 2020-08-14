// alert("hay")
//----contoh pemanggilan in------
// function karyawan() {
//     var dataKaryawan = {
//         nama: "ali ",
//         alamat: " cipondoh ",
//         gaji: 12345,
//         bagian: " frontEnd"
//     }
//     for (var a in dataKaryawan) {
//         document.write(dataKaryawan[a]);
//     }
// }
// karyawan();

//------TUGAS-------

// function tangerang() {
//     function gaji() {
//         return 9999
//     }
//     var cipondoh = {
//         kartuKeluarga: 123456789,
//         namaKepalaKeluarga: "Lukman",
//         jumlahAnak: [1, 2, 3, 4, 5],
//         gaji: gaji(),
//         jumlahKendaraan: {
//             motor: "2 motor",
//             mobil: "1 mobil"
//         }

//     }
//     var ciledug = {
//         kartuKeluarga: 3545,
//         namaKepalaKeluarga: "Nisa",
//         jumlahAnak: [5, 4, 3, 2, 1],
//         gaji: gaji(),
//         jumlahKendaraan: {
//             jumlah: "2 moto 1 mobil"
//         }

//     }
//     for (var x in ciledug) {
//         document.write(ciledug[x]);
//     }
// }
// tangerang();


//-----------materi--------------
// manipulasi array di javascript
// konsep yg suka di pake di framework-framework javascript
// contoh framework vue js, angular, react js, react native(mobile)

// -------shift(); untuk menghapus data yg paling depan-----
// function data() {
//     var karyawan = ["ari", "eli", "ani", "rian"];
//     console.log(karyawan);
//     console.log("--------");
//     var karyawan2 = karyawan.shift();
//     console.log(karyawan2);
//     console.log("--------");
//     var karyawan3 = karyawan.shift();
//     console.log(karyawan3);

//     return karyawan;

// }
// console.log(data());


// -----pop(); untuk menghapus data yg paling belakang-----
// function nama() {
//     var kota = ["jakarta", "tangerang", "bogor"];
//     console.log(kota);
//     console.log("-------");
//     var kota2 = kota.pop();
//     console.log(kota2);
//     console.log("-------");
//     var kota3 = kota.pop();
//     console.log(kota3);

//     return kota;
// }
// console.log(nama());

// ------splice untuk memanipulasi data-----
// function kota() {
//     var namaKota = ["ciledug", "cipondoh", "cikokol"];
//     console.log(namaKota);
//     console.log('-------');
//     namaKota.splice(1, 0, 'london');
//     namaKota.splice(3, 0, 'paris');
//     return namaKota;
// }
// console.log(kota());

//----push untuk menambahkan data paling belakang-----
// function karyawan() {
//     var namaKaryawan = ["eli", "rian", "ari"];
//     console.log(namaKaryawan);
//     namaKaryawan.push("lukman")

//     return namaKaryawan;
// }
// console.log(karyawan());

//----unshift untuk menambahkan data paling depan-----
// function penduduk() {
//     var namaPenduduk = ["eli", "rian", "ari"];
//     console.log(namaPenduduk);
//     namaPenduduk.unshift("lukman", "nisa");

//     return namaPenduduk;
// }
// console.log(penduduk());

//----parseInt merubah string menjadi integer----
// var nilai1 = "20";
// var nilai2 = 10;
// var nilai3 = "10";

// document.write(parseInt(nilai1) + nilai2 + parseInt(nilai3));

//-----parseFloat merubah string mnjadi integer dan menambahkan jumlah nilai beserta setelah koma , ------
// var nilai = "75.55";
// var nilai2 = 10;
// document.write(parseFloat(nilai) + nilai2);

// -----kisi-kisi-------
// var data =  ;
// var data1 =  ;
// var data2 =  ;

// for ( var a = ){
//     var ??( salah 1 variabel yg diatas) = ?? (var yg diatas) + ?? (variabel yg diatas)
//     console.log(data2)
// }
